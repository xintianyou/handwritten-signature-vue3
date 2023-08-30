import handwrittenSignature from './handwritten-signature-vue3/index.vue'

const components = [
  handwrittenSignature
];

const install = (App) => {
	components.forEach((component) => {
		App.component('handwrittenSignature', component);
	})
}
export default { install }