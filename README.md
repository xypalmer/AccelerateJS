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

Troubleshooting Checklist
-------------------------

1. The parallax element should go first, directly after the body tag, and before the content in the rest of your html.
2. Parallax elements have a css position of absolute.
3. Use margin-top and margin-left to position your parallax elements.
4. Website conent should have defined positions other than static. 
5. AccelerateJS and AngularJS are referenced in the html.
