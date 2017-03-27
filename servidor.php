<!DOCKTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>PROJETO-SOLAR</title>
    <link rel="stylesheet" href="css/style.css" />
    <!--https://limadouglas.github.io/arduinosolar/-->

</head>

<body>
    <h1>PROJETO SOLAR</h1>
    <hr align="center" width="80%" size="1" color="black" />
    <table id="tabela_log" align="center">
        <tbody>
            <tr>
                <th>ID</th>
                <th>Descrição</th>
            </tr>
        </tbody>
    </table>

    <input type="button" name="btn" value="Motor1" onclick="criarJson('Motor1')" />
    <input type="button" name="btn" value="Motor2" onclick="criarJson('Motor2')" />

    <script type="text/javascript" src="https://www.gstatic.com/firebasejs/3.7.3/firebase.js"></script>
    <script type="text/javascript" src="script/jquery-3.2.0.min.js"></script>
    <script type="text/javascript" src="script/controle.js"></script>
    
    <?php
        $id  = isset($_POST['id']) ? $_POST['id']  : 0;
        $msg = isset($_POST['id']) ? $_POST['msg'] : "vazio";
        echo '<script>criarJson("hello");</script>';
    ?>
</body>

</html>
