export const alphanumericOnly={
    bind(el, binding) {
        el.addEventListener('keypress', (e) => {
            const key = e.key;
            if (/[^A-Za-z0-9]/.test(key)) {
              console.log("only Alphanumeric")
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
            el.value = initialValue.replace(/[^A-Za-z0-9]/g, '');
            if (initialValue !== el.value) {
              e.stopPropagation()
            }
          })
    },
}