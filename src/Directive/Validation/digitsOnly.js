export const digitOnly={
    bind(el, binding) {
        el.addEventListener('keypress', (e) => {
            const key = e.key;
            if (!/\d/.test(key)) {
              console.log("only number")
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
            console.log(initialValue)
            el.value = initialValue.replace(/[^0-9]*/g, '');
            if (initialValue !== el.value) {
              e.stopPropagation()
            }
          })
  
      },
}