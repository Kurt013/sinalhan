<?php
require './vendor/autoload.php'; // Autoload for PHPSpreadsheet and dependencies
require './classes/main.class.php'; // Your main class

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$conn = $bmis->openConn();

$dateToday = date('F j, Y'); // e.g., January 14, 2025

// Fetch counts and data lists
$totalRescert = $bmis->count_rescert();
$totalBrgyID = $bmis->count_brgyid();
$totalCertofindigency = $bmis->count_indigency();
$totalBusinessPermit = $bmis->count_bspermit();

$totalDailyRequest = $totalRescert + $totalBrgyID + $totalCertofindigency + $totalBusinessPermit;

$totalEarnings = $bmis->getDailyEarnings();

$totalEarningsFormatted = '₱' . number_format($totalEarnings, 2, '.', ',');

$rescertList = $bmis->daily_rescert_list();
$brgyidList = $bmis->daily_brgyid_list();
$bspermitList = $bmis->daily_bspermit_list();
$clearanceList = $bmis->daily_clearance_list();
$indigencyList = $bmis->daily_indigency_list();

// Create a new Spreadsheet object
$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

// Add the title
$sheet->setCellValue('A1', "Daily Report ($dateToday)");
$sheet->getStyle('A1')->getFont()->setBold(true)->setSize(14);
$sheet->mergeCells('A1:D1');

// Add Total Document Issued section
$sheet->setCellValue('A3', 'Total Document Issued');
$sheet->getStyle('A3')->getFont()->setBold(true);

$sheet->setCellValue('A4', 'Certificate of Residency');
$sheet->setCellValue('B4', $totalRescert);

$sheet->setCellValue('A5', 'Barangay ID');
$sheet->setCellValue('B5', $totalBrgyID);

$sheet->setCellValue('A6', 'Business Permit');
$sheet->setCellValue('B6', $totalBusinessPermit);

$sheet->setCellValue('A7', 'Barangay Clearance');
$sheet->setCellValue('B7', count($clearanceList));

$sheet->setCellValue('A8', 'Certificate of Indigency');
$sheet->setCellValue('B8', $totalCertofindigency);

// Add Total Daily Requests
$sheet->setCellValue('A10', 'Total Daily Requests');
$sheet->setCellValue('B10', '=SUM(B4:B8)'); // Automatically calculates the sum

// Add Daily Earnings
$sheet->setCellValue('A12', 'Daily Earnings');
$sheet->setCellValue('B12', $totalEarningsFormatted);

// Add section headers for lists
$listHeaders = [
    'Certificate of Residency List' => $rescertList,
    'Barangay ID List' => $brgyidList,
    'Business Permit List' => $bspermitList,
    'Barangay Clearance List' => $clearanceList,
    'Certificate of Indigency List' => $indigencyList,
];

$rowStart = 14; // Starting row for the lists
foreach ($listHeaders as $header => $list) {
    // Add the section header
    $sheet->setCellValue("A$rowStart", $header);
    $sheet->getStyle("A$rowStart")->getFont()->setBold(true);
    $rowStart++;

    // Add the list items
    foreach ($list as $item) {
        $sheet->setCellValue("A$rowStart", $item['name'] ?? 'N/A'); // Assuming 'name' exists in the data
        $sheet->setCellValue("B$rowStart", $item['date'] ?? 'N/A'); // Assuming 'date' exists in the data
        $rowStart++;
    }
    $rowStart++; // Add a blank row between sections
}

// Set auto-size for all columns
foreach (range('A', 'B') as $columnID) {
    $sheet->getColumnDimension($columnID)->setAutoSize(true);
}

// Output the Excel file
if (isset($_POST['exportToExcel'])) {
    // Set headers for download
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment;filename="daily_report.xlsx"');
    header('Cache-Control: max-age=0');

    $writer = new Xlsx($spreadsheet);
    $writer->save('php://output');
    exit;
}
