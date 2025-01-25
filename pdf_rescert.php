<?php
// Include the main TCPDF library (search for installation path).
require './vendor/autoload.php';
require './classes/main.class.php';

if (isset($_POST['views_data'])) {
    $columns = json_decode($_POST['views_data'], true); 

        // Initialize TCPDF object
        $pdf = new TCPDF();
        $pdf->SetCreator('TCPDF');
        $pdf->SetTitle('Daily Report');
        $pdf->SetSubject('Daily Report for ' . date('F j, Y'));
        // Set page orientation to landscape
        $pdf->AddPage('L');
        // Set document information
        $pdf->SetMargins(15, 15, 15); // Set margins
        // Add a header
        
        $pdf->SetFont('helvetica', 'B', 16);
        $pdf->Cell(0, 15, 'Generated List', 0, 1, 'C');
        

        $pdf->Ln(5);
        $pdf->SetFont('helvetica', 'B', 12);
        $pdf->Cell(35, 10, 'ID Residency', 1, 0, 'C');
        $pdf->Cell(50, 10, 'First Name', 1, 0, 'C');
        $pdf->Cell(10, 10, 'Middle Name', 1, 0, 'C');
        $pdf->Cell(30, 10, 'Last Name', 1, 0, 'C');
        $pdf->Cell(20, 10, 'Suffix', 1, 0, 'C');
        $pdf->Cell(20, 10, 'Age', 1, 0, 'C');
        $pdf->Cell(30, 10, 'House No', 1, 0, 'C');
        $pdf->Cell(40, 10, 'Street', 1, 0, 'C');
        $pdf->Cell(40, 10, 'Purpose', 1, 0, 'C');

        // Add the rescert list
        $pdf->SetFont('helvetica', '', 12);
        foreach ($columns as $column) {
            $pdf->Cell(35, 10, $column['id_rescert'], 1, 0, 'L');
            $pdf->Cell(50, 10, $column['fname'], 1, 0, 'L');
            $pdf->Cell(10, 10, $column['mi'], 1, 0, 'L');
            $pdf->Cell(30, 10, $column['lname'], 1, 0, 'L');
            $pdf->Cell(20, 10, $column['suffix'], 1, 0, 'L');
            $pdf->Cell(20, 10, $column['age'], 1, 0, 'L');
            $pdf->Cell(30, 10, $column['houseno'], 1, 0, 'L');
            $pdf->Cell(40, 10, $column['street'], 1, 0, 'L');
            $pdf->Cell(40, 10, $column['purpose'], 1, 0, 'L');
        }

        // Correct Output method to ensure proper file download
        $pdf->Output('daily_report.pdf', 'I');
        exit;
}