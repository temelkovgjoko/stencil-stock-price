import { Component, h } from "@stencil/core";

@Component({
  tag: "gt-spinner",
  styleUrl: "./spinner.css",
  shadow: true
})
export class Spinner {
  render() {
    return (
      <div class="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
