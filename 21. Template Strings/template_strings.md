# TEMPLATE STRINGS

### Back-Tics Syntax

Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

```
<html>
<body>
<h1>JavaScript Template Strings</h1>
<p>Templates use back-ticks (``) to define a string:</p>

<p id="demo"></p>

<p>Templates are not supported in Internet Explorer.</p>

<script>
let text = `Hello world!`;
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![alt text](image-1.png)

### Quotes Inside Strings

Template Strings allow both single and double quotes inside a string:

```
<html>
<body>
<h1>JavaScript Template Strings</h1>
<p>With back-ticks, you can use both single and double quotes inside a string:</p>

<p id="demo"></p>

<p>Templates not supported in Internet Explorer.</p>

<script>
let text = `He's often called "Johnny"`;
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![alt text](image-2.png)

# INTERPOLATION

Template String provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

`${...}`

### Variable Substitutions

Template Strings allow variables in strings:

```
<html>
<body>
<h1>JavaScript Template Strings</h1>
<p>Templates allow variables in strings:</p>

<p id="demo"></p>

<p>Templates are not supported in Internet Explorer.</p>

<script>
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![alt text](image-3.png)

### Expression Substitution

Template Strings allow expressions in strings:

```
<html>
<body>
<h1>JavaScript Template Strings</h1>
<p>Templates allow variables in strings:</p>

<p id="demo"></p>

<p>Templates are not supported in Internet Explorer.</p>

<script>
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

document.getElementById("demo").innerHTML = total;
</script>

</body>
</html>
```

![alt text](image-4.png)

**Automatic replacing of expressions with real values is called string interpolation.**

# HTML Templates

```
<html>
<body>
<h1>JavaScript Template Strings</h1>
<p>Templates allow variables in strings:</p>

<p id="demo"></p>

<p>Templates are not supported in Internet Explorer.</p>

<script>
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
</script>

</body>
</html>
```
![alt text](image-5.png)
