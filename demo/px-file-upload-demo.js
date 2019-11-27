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
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import '../px-file-upload.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-file-upload" description=" The px-file-upload component allows user to select one or more files from their filesystem by invoking the standard dialog, or by dragging and dropping files onto the target area, if supported by their browser." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <div id="counter" class="u-mb+">The <strong>px-file-upload-files-changed</strong> event has fired <strong>0</strong> time(s)</div>
        <px-file-upload multiple="{{props.multiple.value}}" disabled="{{props.disabled.value}}" accept="{{props.accept.value}}" message="{{props.message.value}}">
        </px-file-upload>

      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-file-upload">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-file-upload" hide="{{hideLocalize}}"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-file-upload-demo',

  properties: {


    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "Default",
            configReset: true },

          { configName: "Multiple files",
            multiple: true,
            disabled: false,
            accept: "",
            message: "Any message can be displayed here"
          },

          { configName: "Accepted types",
            multiple: true,
            disabled: false,
            accept: ".txt,text/html",
            message: "Choose .txt and/or .html file(s)"
          }
        ]
      }
    },

    hideLocalize: {
      type: Array,
      value: function() {
        return ['localize','resources','useKeyIfMissing','formats','pathToResources','loadResources','app-localize-resources-error','app-localize-resources-loaded']
      }
    }
  },

  attached: function(){
    var counter = 0;
    this.addEventListener('px-file-upload-files-changed', function(evt) {
        counter++;
      var span = this.$$('#counter');
      span.innerHTML = 'The <strong>px-file-upload-files-changed</strong> event has fired <strong>' + counter + '</strong> time(s)';
    });
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {
    multiple: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    disabled: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    accept: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    message: {
      type: String,
      defaultValue: 'Drag and drop files here, or click the button below.',
      inputType: 'text'
    }
  }
});