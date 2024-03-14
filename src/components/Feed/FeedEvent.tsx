import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return <div class="event">
      {this.$slots.label && <div class="label">{this.$slots.label()}</div>}
      {
        (this.$slots.summary || this.$slots.meta) &&
        <div class="content">
          {this.$slots.summary && <div class="summary">{this.$slots.summary()}</div>}
          {this.$slots.meta && <div class="meta">{this.$slots.meta()}</div>}
        </div>
      }
      {this.$slots.default?.()}
    </div>
  }
})
