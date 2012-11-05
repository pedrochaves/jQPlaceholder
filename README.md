jQPlaceholder
======================

A jQuery plugin to simulate the placeholder effect on browsers that do not
support it (aka IE).

## Usage
Place your "placeholder" attribute normally on your input tags, and then execute the code

```javascript
$('input[placeholder]').jQPlaceholder();
```

You can also use it simply by typing the code below, which is the same as using
the selector `input[placeholder] input[value]` in the example above

```javascript
$.jQPlaceholder();
```

If you use the second one, the plugin will search for the inputs with the
`placeholder` and `value` attribute and initialize them by himself.
