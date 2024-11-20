<?php
require 'vendor/autoload.php'; // Ensure tc-lib-pdf is installed via Composer.

use TCPDF;

// Create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// Set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('TCPDF Example 001');
$pdf->SetSubject('TCPDF Tutorial');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// Set default header data
$pdf->SetHeaderData('', 0, 'TCPDF Example 001', 'Default Header and Footer Example');

// Set header and footer fonts
$pdf->setHeaderFont(['helvetica', '', 10]);
$pdf->setFooterFont(['helvetica', '', 8]);

// Set default monospaced font
$pdf->SetDefaultMonospacedFont('courier');

// Set margins
$pdf->SetMargins(15, 27, 15);
$pdf->SetHeaderMargin(5);
$pdf->SetFooterMargin(10);

// Set auto page breaks
$pdf->SetAutoPageBreak(true, 25);

// Add a page
$pdf->AddPage();

// Set font
$pdf->SetFont('dejavusans', '', 12);

// HTML content
$html = <<<EOD
<h1>Welcome to tc-lib-pdf!</h1>
<p>This is a simple PDF example.</p>
<p>tc-lib-pdf is a refactored version of TCPDF with better practices.</p>
EOD;

// Write HTML
$pdf->writeHTML($html, true, false, true, false, '');

// Output PDF
$pdf->Output('example_001.pdf', 'I');
