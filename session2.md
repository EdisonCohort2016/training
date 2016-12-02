# Session 2. November 30th, 2016

## Objectives

- Create GitHub account and install GitHub Desktop
- Brainstorm project ideas for student portal
- Tool proficiency with short-Cuts
- Understand what a *Tree Structure* is and its relationship to the DOM.
- Project with HTML and CSS
- Discuss following terms:
  - tag
  - element
    - inline
    - block
  - attribute
  - selector
  - declaration
  - property
  - class
  - id

## Project

Create a webpage.

### Requirements

- Define a purpose for your webpage.
- Place your content in `index.html`.
- Stylize your content by writing CSS in `style.css`.
- Include:
    - 1 or more images
    - Link to an external website
    - CSS to stylize the webpage

## Code Like a Pro

Tip: Use more keyboard short-cuts and less trackpad.

Selector  | Command                   | OS X                         | Windows
--------- | ------------------------- | ---------------------------- | ----------------------------
Universal | Save                      | <kbd>Command+S</kbd>         | <kbd>Control+S</kbd>
Universal | Select All                | <kbd>Command+A</kbd>         | <kbd>Control+A</kbd>
Universal | Cut                       | <kbd>Command+X</kbd>         | <kbd>Control+X</kbd>
Universal | Copy                      | <kbd>Command+C</kbd>         | <kbd>Control+C</kbd>
Universal | Paste                     | <kbd>Command+V</kbd>         | <kbd>Control+V</kbd>
Universal | Undo                      | <kbd>Command+Z</kbd>         | <kbd>Control+Z</kbd>
Universal | Redo                      | <kbd>Command+Shift+Z</kbd>   | <kbd>Control+Y</kbd>
System    | Switch Apps               | <kbd>Command+Tab</kbd>       | <kbd>Control+Tab</kbd>
System    | Switch Apps (Reverse)     | <kbd>Command+Shift+Tab</kbd> | <kbd>Control+Shift+Tab</kbd>
Chrome    | Reload Page               | <kbd>Command+R</kbd>         | <kbd>Control+R</kbd>
Chrome    | Reload Page, ignore cache | <kbd>Command+Shift+R</kbd>   | <kbd>Control+Shift+R</kbd>
Atom.io   | Toggle Comments           | <kbd>Command+/</kbd>         | <kbd>Control+/</kbd>

## Recommended Resources

- [w3schools: HTML5 Tutorial](http://www.w3schools.com/html/default.asp)
- [w3schools: CSS Tutorial](http://www.w3schools.com/css/default.asp)
- [HTML DOM Tree](https://gojs.net/latest/samples/DOMTree.html)
- [21 Web App Ideas for Beginner Projects](https://devcereal.com/21-web-app-ideas-beginner-projects/)

## Recommended Reading

- [Wikipedia: Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model)
- [Wikipedia: Tree structure ](https://en.wikipedia.org/wiki/Tree_%28data_structure%29)
- [Wikipedia: Cut, copy, and paste](https://en.wikipedia.org/wiki/Cut,_copy,_and_paste)

## Humor

![XKCD Tags](http://imgs.xkcd.com/comics/tags.png)

[Source: https://xkcd.com/1144/](https://xkcd.com/1144/)


## Recommended HTML Elements and CSS Properties

As requested, here is a list of elements and properties to help get you started.

#### HTML Elements

Here's the [HTML Element Reference](http://www.w3schools.com/tags/default.asp) at w3schools. Use this to learn about the various elements you can use as you build your webpages. The following is a curated list of many the most commonly used elements:

- [&lt;html&gt;](http://www.w3schools.com/tags/tag_html.asp)
- [&lt;head&gt;](http://www.w3schools.com/tags/tag_head.asp)
- [&lt;body&gt;](http://www.w3schools.com/tags/tag_body.asp)
- [&lt;title&gt;](http://www.w3schools.com/tags/tag_title.asp)
- [&lt;h1&gt; - &lt;h6&gt;](http://www.w3schools.com/tags/tag_hn.asp)
- [&lt;div&gt;](http://www.w3schools.com/tags/tag_div.asp)
- [&lt;p&gt;](http://www.w3schools.com/tags/tag_p.asp)
- [&lt;img&gt;](http://www.w3schools.com/tags/tag_img.asp)
- [&lt;a&gt;](http://www.w3schools.com/tags/tag_a.asp)
- [&lt;strong&gt;](http://www.w3schools.com/tags/tag_strong.asp)
- [&lt;em&gt;](http://www.w3schools.com/tags/tag_em.asp)
- [&lt;b&gt;](http://www.w3schools.com/tags/tag_b.asp)
- [&lt;i&gt;](http://www.w3schools.com/tags/tag_i.asp)
- [&lt;span&gt;](http://www.w3schools.com/tags/tag_span.asp)
- [&lt;br&gt;](http://www.w3schools.com/tags/tag_br.asp)
- [&lt;ul&gt;](http://www.w3schools.com/tags/tag_ul.asp)
- [&lt;ol&gt;](http://www.w3schools.com/tags/tag_ol.asp)
- [&lt;li&gt;](http://www.w3schools.com/tags/tag_li.asp)

#### CSS Properties

Here's the [CSS Properties Reference](http://www.w3schools.com/cssref/default.asp) at w3schools. This is a comprehensive list of properties you can use to style the content of your webpages. The following is a curated list of CSS properties to get you started:

- [background:](http://www.w3schools.com/cssref/css3_pr_background.asp)
- [color:](http://www.w3schools.com/cssref/pr_text_color.asp)
- [font-size:](http://www.w3schools.com/cssref/pr_font_font-size.asp)
- [font-family:](http://www.w3schools.com/cssref/pr_font_font-family.asp)
- [padding:](http://www.w3schools.com/cssref/pr_padding.asp)
- [margin:](http://www.w3schools.com/cssref/pr_margin.asp)
- [border:](http://www.w3schools.com/cssref/pr_border.asp)

###### CSS Example

```css
/* Element selector */
div {
    background: #000;
    color: #fff;
}

/* Class selectors are prepended with a '.' */
.bluetext {
    color: #00f;
}

/* ID selectors are prepended with a '#'. */
#myuniqueid {
    margin: 20px;
    padding: 20px;
    border: 1px solid #00f;
}
```
