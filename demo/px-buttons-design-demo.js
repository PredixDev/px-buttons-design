/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-buttons-design-demo-styles.js';
import 'px-icon-set/px-icon-set.js';
import 'px-icon-set/px-icon.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-buttons-design-demo-styles" is="custom-style"></style>
<!-- 1: Describe Module -->
<px-sass-doc module-name="px-buttons-design" description="The Predix UI Buttons module is a simple, robust, extensible baseline for building entire suites of buttons on." layer="objects" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-colors-design&quot;,
    &quot;https://github.com/PredixDev/px-defaults-design&quot;
  ]" selected-options="{{selectedOptions}}" tabs="[&quot;Text&quot;,&quot;Text &amp; icon&quot;,&quot;Icon&quot;]" selected-tab="{{selectedTab}}">


<!-- 3: Make HTML Demo -->
<template is="dom-if" if="{{_tabIs('Text',selectedTab)}}" restamp="">
<px-sass-doc-option slot="options" option-name="Size" choose-with="dropdown" choices="[
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;,
    &quot;huge&quot;,
    &quot;full (mobile)&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Type" choose-with="dropdown" choices="[
    &quot;primary&quot;,
    &quot;secondary (default)&quot;,
    &quot;tertiary&quot;,
    &quot;call to action&quot;,
    &quot;bare&quot;,
    &quot;bare primary&quot;
  ]" default-choice="secondary (default)">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>
<section slot="demo-html">
<button class\$="{{buttonClasses}}">Label</button>
</section>
<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>
</template>

<template is="dom-if" if="{{_tabIs('Text &amp; icon',selectedTab)}}" restamp="">
<px-sass-doc-option slot="options" option-name="Size" choose-with="dropdown" choices="[
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;,
    &quot;huge&quot;,
    &quot;full (mobile)&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Type" choose-with="dropdown" choices="[
    &quot;primary&quot;,
    &quot;secondary (default)&quot;,
    &quot;tertiary&quot;,
    &quot;call to action&quot;,
    &quot;bare&quot;,
    &quot;bare primary&quot;
  ]" default-choice="secondary (default)">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>
<section slot="demo-html">
<button class\$="{{buttonClasses}}">
  <px-icon style="--iron-icon-height:16px;margin-right:5px;" icon="px-utl:app-settings"></px-icon>Label
</button>
</section>
<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>
</template>

<template is="dom-if" if="{{_tabIs('Icon',selectedTab)}}" restamp="">
<px-sass-doc-option slot="options" option-name="Size" choose-with="dropdown" choices="[
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;,
    &quot;huge&quot;,
    &quot;full (mobile)&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Icon Type" choose-with="dropdown" choices="[
    &quot;bare&quot;,
    &quot;bare primary&quot;
  ]" default-choice="bare">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>
<section slot="demo-html">
<button class\$="{{iconClasses}}">
  <px-icon style="--iron-icon-height:16px" icon="px-utl:app-settings"></px-icon>
</button>
</section>
<section slot="import">
{{importIconCode}}
</section>
</template>


<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- Default Button: -->
<button class="btn">Button</button>


<!-- Sizes of Buttons: -->
<button class="btn btn--small">Small</button>
<button class="btn btn--large">Large</button>
<button class="btn btn--huge">Huge</button>
<button class="btn btn--full">Full</button>

Note: the "Full" size button has a width that is 100% of its parent container.
It is ideal for use on mobile devices, in modals, or any other use case where
the button should appear as wide as possible.


<!-- Types of Buttons: -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--call-to-action">Call To Action</button>
<button class="btn btn--call-to-action btn--disabled">Call To Action (disabled)</button>
<button class="btn btn--tertiary">Tertiary</button>
<button class="btn btn--disabled">Disabled</button>
<button class="btn btn--bare">Bare</button>
<button class="btn btn--bare--primary">Bare Primary</button>


<!-- Iconic Buttons: -->
<button class="btn btn--icon">Icon</button>
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-buttons-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.importCode = this._importCode();
    this.importIconCode = this._importIconCode();
    this.buttonClasses = this._buttonClasses();
    this.iconClasses = this._iconClasses();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _buttonClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Size === "small")          strings.push("btn--small");
    if (opts.Size === "large")          strings.push("btn--large");
    if (opts.Size === "huge")           strings.push("btn--huge");
    if (opts.Size === "full (mobile)")  strings.push("btn--full");
    if (opts.Type === "primary")        strings.push("btn--primary");
    if (opts.Type === "call to action") strings.push("btn--call-to-action");
    if (opts.Type === "tertiary")       strings.push("btn--tertiary");
    if (opts.Type === "bare")           strings.push("btn--bare");
    if (opts.Type === "bare primary")   strings.push("btn--bare--primary");
    if (opts.Icon === true)             strings.push("btn--icon");
    if (opts.Disabled === true)         strings.push("btn--disabled");
    return ("btn " + strings.join(" ")).trim();
  },

  _iconClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Size === "small")                  strings.push("btn--small");
    if (opts.Size === "large")                  strings.push("btn--large");
    if (opts.Size === "huge")                   strings.push("btn--huge");
    if (opts.Size === "full (mobile)")          strings.push("btn--full");
    if (opts["Icon Type"] === "disabled")       strings.push("btn--disabled");
    if (opts["Icon Type"] === "bare")           strings.push("btn--bare");
    if (opts["Icon Type"] === "bare primary")   strings.push("btn--bare--primary");
    if (opts.Icon === true)                     strings.push("btn--icon");
    if (opts.Disabled === true)                 strings.push("btn--disabled");
    return ("btn " + strings.join(" ")).trim();
  },

  _importCode : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Size === "small")          strings.push("$inuit-enable-btn--small : true;");
    if (opts.Size === "large")          strings.push("$inuit-enable-btn--large : true;");
    if (opts.Size === "huge")           strings.push("$inuit-enable-btn--huge : true;");
    if (opts.Size === "full (mobile)")  strings.push("$inuit-enable-btn--full : true;");
    if (opts.Type === "primary")        strings.push("$inuit-enable-btn--primary : true;");
    if (opts.Type === "call to action") strings.push("$inuit-enable-btn--call-to-action : true;");
    if (opts.Type === "tertiary")       strings.push("$inuit-enable-btn--tertiary : true;");
    if (opts.Type === "bare")           strings.push("$inuit-enable-btn--bare : true;");
    if (opts.Type === "bare primary")   strings.push("$inuit-enable-btn--bare--primary : true;");
    if (opts.Icon === true)             strings.push("$inuit-enable-btn--icon : true;");
    if (opts.Disabled === true)         strings.push("$inuit-enable-btn--disabled : true;");
    return (strings.join("\n") + "\n@import 'px-buttons-design/_objects.buttons.scss';").trim();
  },

  _importIconCode : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Size === "small")                  strings.push("$inuit-enable-btn--small : true;");
    if (opts.Size === "large")                  strings.push("$inuit-enable-btn--large : true;");
    if (opts.Size === "huge")                   strings.push("$inuit-enable-btn--huge : true;");
    if (opts.Size === "full (mobile)")          strings.push("$inuit-enable-btn--full : true;");
    if (opts["Icon Type"] === "bare")           strings.push("$inuit-enable-btn--bare : true;");
    if (opts["Icon Type"] === "bare primary")   strings.push("$inuit-enable-btn--bare--primary : true;");
    if (opts.Icon === true)                     strings.push("$inuit-enable-btn--icon : true;");
    if (opts.Disabled === true)                 strings.push("$inuit-enable-btn--disabled : true;");
    return (strings.join("\n") + "\n@import 'px-buttons-design/_objects.buttons.scss';").trim();
  },

  _tabIs : function(tabName) {
    var selected = this.selectedTab || '';
    this.selectedOptions.Icon = (this.selectedTab === 'Icon');
    this.fire('px-sass-doc-options-updated', {});
    return selected === tabName;
  }
});