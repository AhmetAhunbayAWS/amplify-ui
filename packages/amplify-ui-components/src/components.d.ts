/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  TextFieldTypes,
} from './common/types';

export namespace Components {
  interface AmplifyAuthenticator {
    'content': Function;
    'signIn': Function;
  }
  interface AmplifyButton {
    'primaryColor': string;
    'role': string;
    'type': string;
  }
  interface AmplifyExamples {}
  interface AmplifyFormField {
    /**
    * The text of the description.  Goes between the label and the input.
    */
    'description': string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId': string;
    /**
    * The text of a hint to the user as to how to fill out the input.  Goes just below the input.
    */
    'hint': string | null;
    /**
    * The text of the label.  Goes above the input. Ex: "First name"
    */
    'label': string | null;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInput'?: (arg0: Event) => void;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyHint {}
  interface AmplifyInput {
    /**
    * The text of the description.  Goes just below the label.
    */
    'description': string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInput'?: (arg0: Event) => void;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyLabel {
    'htmlFor': string;
  }
  interface AmplifyLink {
    'role': string;
  }
  interface AmplifySceneLoading {
    'loadPercentage': number;
    'sceneError': object;
    'sceneName': string;
  }
  interface AmplifySection {
    'role': string;
  }
  interface AmplifySectionHeader {}
  interface AmplifySignIn {
    'handleSubmit': (Event) => void;
    'validationErrors': string;
  }
  interface AmplifySignInPasswordField {
    'component': Function;
    'description': string | null;
    'fieldId': string;
    'hint': string | null;
    'inputProps': {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label': string | null;
  }
  interface AmplifySignInUsernameField {
    'component': Function;
    'description': string | null;
    'fieldId': string;
    'hint': string | null;
    'inputProps': {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label': string | null;
  }
  interface RockPaperScissor {
    'icon': Function;
  }
}

declare global {


  interface HTMLAmplifyAuthenticatorElement extends Components.AmplifyAuthenticator, HTMLStencilElement {}
  var HTMLAmplifyAuthenticatorElement: {
    prototype: HTMLAmplifyAuthenticatorElement;
    new (): HTMLAmplifyAuthenticatorElement;
  };

  interface HTMLAmplifyButtonElement extends Components.AmplifyButton, HTMLStencilElement {}
  var HTMLAmplifyButtonElement: {
    prototype: HTMLAmplifyButtonElement;
    new (): HTMLAmplifyButtonElement;
  };

  interface HTMLAmplifyExamplesElement extends Components.AmplifyExamples, HTMLStencilElement {}
  var HTMLAmplifyExamplesElement: {
    prototype: HTMLAmplifyExamplesElement;
    new (): HTMLAmplifyExamplesElement;
  };

  interface HTMLAmplifyFormFieldElement extends Components.AmplifyFormField, HTMLStencilElement {}
  var HTMLAmplifyFormFieldElement: {
    prototype: HTMLAmplifyFormFieldElement;
    new (): HTMLAmplifyFormFieldElement;
  };

  interface HTMLAmplifyHintElement extends Components.AmplifyHint, HTMLStencilElement {}
  var HTMLAmplifyHintElement: {
    prototype: HTMLAmplifyHintElement;
    new (): HTMLAmplifyHintElement;
  };

  interface HTMLAmplifyInputElement extends Components.AmplifyInput, HTMLStencilElement {}
  var HTMLAmplifyInputElement: {
    prototype: HTMLAmplifyInputElement;
    new (): HTMLAmplifyInputElement;
  };

  interface HTMLAmplifyLabelElement extends Components.AmplifyLabel, HTMLStencilElement {}
  var HTMLAmplifyLabelElement: {
    prototype: HTMLAmplifyLabelElement;
    new (): HTMLAmplifyLabelElement;
  };

  interface HTMLAmplifyLinkElement extends Components.AmplifyLink, HTMLStencilElement {}
  var HTMLAmplifyLinkElement: {
    prototype: HTMLAmplifyLinkElement;
    new (): HTMLAmplifyLinkElement;
  };

  interface HTMLAmplifySceneLoadingElement extends Components.AmplifySceneLoading, HTMLStencilElement {}
  var HTMLAmplifySceneLoadingElement: {
    prototype: HTMLAmplifySceneLoadingElement;
    new (): HTMLAmplifySceneLoadingElement;
  };

  interface HTMLAmplifySectionElement extends Components.AmplifySection, HTMLStencilElement {}
  var HTMLAmplifySectionElement: {
    prototype: HTMLAmplifySectionElement;
    new (): HTMLAmplifySectionElement;
  };

  interface HTMLAmplifySectionHeaderElement extends Components.AmplifySectionHeader, HTMLStencilElement {}
  var HTMLAmplifySectionHeaderElement: {
    prototype: HTMLAmplifySectionHeaderElement;
    new (): HTMLAmplifySectionHeaderElement;
  };

  interface HTMLAmplifySignInElement extends Components.AmplifySignIn, HTMLStencilElement {}
  var HTMLAmplifySignInElement: {
    prototype: HTMLAmplifySignInElement;
    new (): HTMLAmplifySignInElement;
  };

  interface HTMLAmplifySignInPasswordFieldElement extends Components.AmplifySignInPasswordField, HTMLStencilElement {}
  var HTMLAmplifySignInPasswordFieldElement: {
    prototype: HTMLAmplifySignInPasswordFieldElement;
    new (): HTMLAmplifySignInPasswordFieldElement;
  };

  interface HTMLAmplifySignInUsernameFieldElement extends Components.AmplifySignInUsernameField, HTMLStencilElement {}
  var HTMLAmplifySignInUsernameFieldElement: {
    prototype: HTMLAmplifySignInUsernameFieldElement;
    new (): HTMLAmplifySignInUsernameFieldElement;
  };

  interface HTMLRockPaperScissorElement extends Components.RockPaperScissor, HTMLStencilElement {}
  var HTMLRockPaperScissorElement: {
    prototype: HTMLRockPaperScissorElement;
    new (): HTMLRockPaperScissorElement;
  };
  interface HTMLElementTagNameMap {
    'amplify-authenticator': HTMLAmplifyAuthenticatorElement;
    'amplify-button': HTMLAmplifyButtonElement;
    'amplify-examples': HTMLAmplifyExamplesElement;
    'amplify-form-field': HTMLAmplifyFormFieldElement;
    'amplify-hint': HTMLAmplifyHintElement;
    'amplify-input': HTMLAmplifyInputElement;
    'amplify-label': HTMLAmplifyLabelElement;
    'amplify-link': HTMLAmplifyLinkElement;
    'amplify-scene-loading': HTMLAmplifySceneLoadingElement;
    'amplify-section': HTMLAmplifySectionElement;
    'amplify-section-header': HTMLAmplifySectionHeaderElement;
    'amplify-sign-in': HTMLAmplifySignInElement;
    'amplify-sign-in-password-field': HTMLAmplifySignInPasswordFieldElement;
    'amplify-sign-in-username-field': HTMLAmplifySignInUsernameFieldElement;
    'rock-paper-scissor': HTMLRockPaperScissorElement;
  }
}

declare namespace LocalJSX {
  interface AmplifyAuthenticator extends JSXBase.HTMLAttributes<HTMLAmplifyAuthenticatorElement> {
    'content'?: Function;
    'onAuthStateChange'?: (event: CustomEvent<any>) => void;
    'signIn'?: Function;
  }
  interface AmplifyButton extends JSXBase.HTMLAttributes<HTMLAmplifyButtonElement> {
    'primaryColor'?: string;
    'role'?: string;
    'type'?: string;
  }
  interface AmplifyExamples extends JSXBase.HTMLAttributes<HTMLAmplifyExamplesElement> {}
  interface AmplifyFormField extends JSXBase.HTMLAttributes<HTMLAmplifyFormFieldElement> {
    /**
    * The text of the description.  Goes between the label and the input.
    */
    'description'?: string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId'?: string;
    /**
    * The text of a hint to the user as to how to fill out the input.  Goes just below the input.
    */
    'hint'?: string | null;
    /**
    * The text of the label.  Goes above the input. Ex: "First name"
    */
    'label'?: string | null;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInput'?: (arg0: Event) => void;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyHint extends JSXBase.HTMLAttributes<HTMLAmplifyHintElement> {}
  interface AmplifyInput extends JSXBase.HTMLAttributes<HTMLAmplifyInputElement> {
    /**
    * The text of the description.  Goes just below the label.
    */
    'description'?: string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInput'?: (arg0: Event) => void;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyLabel extends JSXBase.HTMLAttributes<HTMLAmplifyLabelElement> {
    'htmlFor'?: string;
  }
  interface AmplifyLink extends JSXBase.HTMLAttributes<HTMLAmplifyLinkElement> {
    'role'?: string;
  }
  interface AmplifySceneLoading extends JSXBase.HTMLAttributes<HTMLAmplifySceneLoadingElement> {
    'loadPercentage'?: number;
    'sceneError'?: object;
    'sceneName'?: string;
  }
  interface AmplifySection extends JSXBase.HTMLAttributes<HTMLAmplifySectionElement> {
    'role'?: string;
  }
  interface AmplifySectionHeader extends JSXBase.HTMLAttributes<HTMLAmplifySectionHeaderElement> {}
  interface AmplifySignIn extends JSXBase.HTMLAttributes<HTMLAmplifySignInElement> {
    'handleSubmit'?: (Event) => void;
    'validationErrors'?: string;
  }
  interface AmplifySignInPasswordField extends JSXBase.HTMLAttributes<HTMLAmplifySignInPasswordFieldElement> {
    'component'?: Function;
    'description'?: string | null;
    'fieldId'?: string;
    'hint'?: string | null;
    'inputProps'?: {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label'?: string | null;
  }
  interface AmplifySignInUsernameField extends JSXBase.HTMLAttributes<HTMLAmplifySignInUsernameFieldElement> {
    'component'?: Function;
    'description'?: string | null;
    'fieldId'?: string;
    'hint'?: string | null;
    'inputProps'?: {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label'?: string | null;
  }
  interface RockPaperScissor extends JSXBase.HTMLAttributes<HTMLRockPaperScissorElement> {
    'icon'?: Function;
    'onIconChange'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'amplify-authenticator': AmplifyAuthenticator;
    'amplify-button': AmplifyButton;
    'amplify-examples': AmplifyExamples;
    'amplify-form-field': AmplifyFormField;
    'amplify-hint': AmplifyHint;
    'amplify-input': AmplifyInput;
    'amplify-label': AmplifyLabel;
    'amplify-link': AmplifyLink;
    'amplify-scene-loading': AmplifySceneLoading;
    'amplify-section': AmplifySection;
    'amplify-section-header': AmplifySectionHeader;
    'amplify-sign-in': AmplifySignIn;
    'amplify-sign-in-password-field': AmplifySignInPasswordField;
    'amplify-sign-in-username-field': AmplifySignInUsernameField;
    'rock-paper-scissor': RockPaperScissor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


