declare module 'customizable-toast-notification' {
    export function createToast(options: {
      message?: string;
      duration?: number;
      position?: string;
      type?: string;
      backgroundColor?: string;
      textColor?: string;
      showCloseButton?: boolean;
      animationDuration?: string;
      animationEasing?: string;
    }): void;
  
    export function setDefaultColors(newColors: Record<string, string>): void;
    export function setDefaultMessages(newMessages: Record<string, string>): void;
  }
  