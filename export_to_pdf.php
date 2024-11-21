<?php
// Include the main TCPDF library (search for installation path).
require './vendor/autoload.php';
require './classes/main.class.php';

if (isset($_POST['views_data']) && isset($_POST['table_name'])) {
    $tableName = $_POST['table_name'];
    $rows = json_decode($_POST['views_data'], true); 

    try {
    // Connect to the database (update with your credentials)

    $connection = $bmis->openConn();                

    $query = "SHOW COLUMNS FROM `" . $tableName . "`";
    $stmt = $connection->prepare($query);
    $stmt->execute();
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Create new PDF document
    $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

    // Set document information
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor('Barangay Sinalhan - DOCUMENT ISSUANCE SYSTEM');
    $pdf->SetTitle('List of Transactions');
    $pdf->SetSubject('List of Transactions');
    $pdf->SetKeywords('transactions, list, documents, table');

    // Set default header data
    $pdf->SetHeaderData('', 0, 'AUTO-GENERATED PDF', 'List of Transactions (ARCHIVED)');
    $pdf->setPageOrientation('L');
    // Set header and footer fonts
    $pdf->setHeaderFont(['helvetica', '', 10]);
    $pdf->setFooterFont(['helvetica', '', 8]);

    // Set margins
    $pdf->SetMargins(15, 27, 15);
    $pdf->SetHeaderMargin(5);
    $pdf->SetFooterMargin(10);

    // Set auto page breaks
    $pdf->SetAutoPageBreak(true, 25);

    // Set font
    $pdf->SetFont('times', '', 12);

    // Add a page
    $pdf->AddPage();

    // Build table header dynamically
    $html = '<table border="1" cellpadding="5" cellspacing="0">
                <thead>
                    <tr>';
    foreach ($columns as $column) {
        if ($column['Field'] === 'res_photo') {
            continue; // Skip the 'res_photo' column
        }
            $html .= '<th>' . htmlspecialchars($column['Field']) . '</th>';
    }
    $html .= '    </tr>
                </thead>
                <tbody>';

    foreach ($rows as $row) {
        $html .= '<tr>';
        foreach ($columns as $column) {
            if ($column['Field'] === 'res_photo') {
                continue; // Skip the 'res_photo' column
            }
                $html .= '<td>' . htmlspecialchars($row[$column['Field']]) . '</td>';
        }
        $html .= '</tr>';
    }
    $html .= '    </tbody>
            </table>';

    // Write the HTML content
    $pdf->writeHTML($html, true, false, true, false, '');

    // Output the PDF
    $pdf->Output('dynamic_table.pdf', 'I');
    } catch (PDOException $e) {
    die("Database error: " . $e->getMessage());
    }
}