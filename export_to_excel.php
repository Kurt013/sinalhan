<?php
require './vendor/autoload.php'; // Autoload for PHPSpreadsheet and other libraries
require './classes/main.class.php'; // Your main class

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

ob_start(); // Prevent unintended output

// if (isset($_POST['views_data']) && isset($_POST['table_name'])) {

    try {
        // Connect to the database
        $connection = $bmis->openConn();

        $query = 'SELECT * FROM tbl_bspermit WHERE doc_status = "archived"';
        $stmt = $connection->prepare($query);
        $stmt->execute();
        $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (empty($columns)) {
            throw new Exception("No columns found for the table.");
        }

        // Create a new Spreadsheet object
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // Set document properties
        $spreadsheet->getProperties()
            ->setCreator('Barangay Sinalhan - DOCUMENT ISSUANCE SYSTEM')
            ->setLastModifiedBy('Barangay Sinalhan')
            ->setTitle('List of Transactions')
            ->setSubject('List of Transactions')
            ->setDescription('Auto-generated Excel file of transactions.');

        // Define table headers
        $headers = [
            'ID', 'First Name', 'Middle Initial', 'Last Name', 'Suffix', 'Business Name', 'House Number', 
            'Street', 'Barangay', 'City', 'Municipality', 'Industry', 
            'Area of Expertise', 'Created On', 'Created By'
        ];

        // Set table headers in the first row
        $colIndex = 'A';
        foreach ($headers as $header) {
            $sheet->setCellValue($colIndex . '1', $header);
            $colIndex++;
        }

        // Populate the spreadsheet with data
        $rowIndex = 2; // Start from the second row
        foreach ($columns as $row) {
            $colIndex = 'A';
            foreach ($headers as $header) {
            $sheet->setCellValue($colIndex . $rowIndex, $row[$header]);
            $colIndex++;
            }
            $rowIndex++;
        }






        // Auto-size columns for readability
        foreach (range('A', chr(ord($colIndex) - 1)) as $col) {
            if (!preg_match('/^[A-Z]$/', $col)) continue; // Validate column names
            $sheet->getColumnDimension($col)->setAutoSize(true);
        }

        // Set header style
        $sheet->getStyle('1:1')->getFont()->setBold(true);

        // Write the spreadsheet to a file or output directly
        $writer = new Xlsx($spreadsheet);

        // Set headers for file download
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="archived_list.xlsx"');
        header('Cache-Control: max-age=0');

        // Output the file to the browser
        $writer->save('php://output');
        exit;
    } catch (PDOException $e) {
        error_log("Database error: " . $e->getMessage());
        die("An error occurred while processing your request.");
    } catch (Exception $e) {
        error_log("Error creating Excel file: " . $e->getMessage());
        die("An error occurred while generating the file.");
    }
// }
?>
