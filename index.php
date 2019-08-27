<!DOCTYPE html>
<html>
<header>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="./css/index.css">
<title>
David Barker's portfolio homepage
</title>
</header>

<body>
	<p class="title"><span>Welcome to David Barker's portfolio</span><br></p>
	<div class="flexcontainer">
	<div class="flexbox3side gallery">
		<p class="frame"><img src="./images/python_small.png" alt="Python logo"></p>
		<p class="frame"><img src="./images/php_logo.gif" alt="PHP logo"></p>
		<p class="frame"><img src="./images/css3_logo.jpg" alt="CSS3 logo"></p>
		<p class="frame"><img src="./images/html5_logo.png" alt="HTML5 logo"></p>
		<p class="frame"><img src="./images/javascript_logo.png" alt="Javascript logo"></p>
		<p class="frame"><img src="./images/mysql_logo.png" alt="MySQL logo"></p>
	</div>
	<div class="flexbox3middle">
		<div class="project">
			<p class="subtitle"> Deployed projects with full functionality</p>
			<a href="https://vet-calc.herokuapp.com/" class="link"><img class=logo src="./images/vet_logo.jpg"><br>Vet Calculation App</a><br>
			<p class="intro">My final project from the Harvard University Computer Science Course.</p>
			<ul class="list">
				<li>Python server running PostgresSQL via SQLAlchemy. </li>
				<li>SQLAlchemy makes database switching easier. </li> 
				<li>The teaching and quiz pages are run via templating in Jinja2 </li>
				<li>Full frontend form validation via jQuery</li>
				<li>Test page using Javascript DOM manipulation and CSS </li>
				<li>Full stack development</li>
			</ul>
			<br><br>
			<a href="./FFVII/index.html" class="link"><img class=logo src="./images/ffvii_logo.jpg"><br>Final Fantasy VII remake page</a><br>
			<p class="intro">A simple HTML and CSS project to
			<br>
			display responsive design skills</p>
			<ul class="list">
				<li>HTML5 imbeded images</li>
				<li>HTML5 imbeded video</li>
				<li>HTML5 imbeded sound</li> 
				<li>CSS</li>
				<li>Responsive web design</li>
				<li>Bootstrap for gallery carousel and gallery images</li>
			</ul>
			<br>
		</div>
	<div class="project">	
	<p class="subtitle"> Projects under construction</p>
	<a href="./phpLogin" class="link">PHP User Management System</a><br>
	<p class="intro">Current Functions</p>
	<ul class="list">
	<li>Register</li>
	<li>Login</li>
	<li>Logout</li>
	<li>Update</li>
	<li>Registration email</li>
	<li>Email verification</li>
	<li>Email Password Reset </li>
	<li>Enforced https support</li>
	<li>Message Display</li>
	</ul>
	<p class="intro">To do list</p>
	<ul class="list">
	<li>Admin database manipulation</li>
	<li>Javascript form validation and jQuery</li>
	<li>CSS overhaul</li>
	</ul>
	</div>
	<div class="project">
	<p class="subtitle">Future Projects</p>
	<ul class="list">
	<li>CSS Animation</li>
	<li>Photography Store</li>
	</ul>
</div>
	<p class="project subtitle">
	<a class="melink" href="./aboutme.php">About me</a>
	</p>
	</div>
	<div class="flexbox3side gallery">
		<p class="frame"><img src="./images/postgresql_logo.png" alt="PostgreSQL logo"></p>
		<p class="frame"><img src="./images/bootstrap_logo.png" alt="Bootstrap logo"></p>
		<p class="frame"><img src="./images/sass_logo.png" alt="Sass logo"></p>
		<p class="frame"><img src="./images/flask_logo.png" alt="Flask logo"></p>
		<p class="frame"><img src="./images/jinja_logo.png" alt="Jinja logo"></p>
		<p class="frame"><img src="./images/sqlalchemy_logo.jpg" alt="SQLAlchemy logo"></p>
	</div>
</body>
<footer>
	All project code can be found at: <a class="gitlink" href="https://github.com/RVJonah">https://github.com/RVJonah</a>
	<img src="./images/php_logo.gif">
</footer>

</html>
