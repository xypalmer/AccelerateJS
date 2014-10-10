Accelerate.js
=============

Welcom to AccelerateJS, a simple solution to add parallax functionality to your website!

Setup
=====

AccelerateJS runs on AngularJS, so make sure you [grab it](https://angularjs.org) and hook it up to your site. 

Build your website as you normally would, then place the elements that you would like to parallax into the parallax tag.

Like so:
```
<parallax>
  <div accelerate class="exampleclass"></div>
  <div accelerate class="exampleclass2"></div>
  <div accelerate class="exampleclass3"></div>
</parallax>
```
To position yoru elements, you must use <code>margin-top</code> and <code>margin-left</code> in your CSS classes for AccelerateJS to function correctly. 

The parallax element is placed automatically in the center of your website. If you would like to position your element 100px to the left of the center, use <code>margin-left: -100px;</code> in your CSS. <code>margin-left: 100px;</code> to move an element 100px to the right. 

Additional Functions
====================

AccelerateJS allows you to control the speed of your parallax elements so that you can "accelerate" some elements faster than others. 

To do this, all you need to add to your code is a number value. This value is a multiple of the normal speed. 

Taking from our previous example: 

```
  <div accelerate="2" class="exampleclass"></div>
  <div accelerate="0.5" class="exampleclass2"></div>
  <div accelerate="-5" class="exampleclass3"></div>
```

Adding a negative value will cause the parallaxed elements to move down instead of up.

In addition, AccelerateJS makes it easy for you to use Z-indexes. Simply add <code>z="5"</code> or any number to your html elements to control the order how your elements are stacked. This code can also be added to elements outside of the <code>parallax</code> element. 

Troubleshooting Checklist
-------------------------

1. The parallax element should go first, directly after the body tag, and before the content in the rest of your html.
2. Parallax elements have a css position of absolute.
3. Use margin-top and margin-left to position your parallax elements in CSS.
4. Website conent should have defined positions other than static. 
5. AccelerateJS and AngularJS are referenced in the html.
