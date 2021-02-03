
export const mixinValidate = {

  directives: {

    Alphabet(el, binding) {
      el.addEventListener('keypress', (e) => {
          const key = e.key;
          if (!/[A-Za-z]/.test(key)) {
            console.log("only string")
            e.preventDefault();
          }
        }),
        el.addEventListener('paste', (e) => {
          e.preventDefault();
        }),
        el.addEventListener('copy', (e) => {
          e.preventDefault();
        }),
        el.addEventListener('change', (e) => {
          const initialValue = el.value;
          el.value = initialValue.replace(/[^A-Za-z ]*/g, '');
          if (initialValue !== el.value) {
            e.stopPropagation()
            console.log("string")
          }
        })
    },
  }
}
