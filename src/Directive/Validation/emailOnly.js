export const emailOnly={
    bind(el, binding) {
        el.addEventListener('paste', (e) => {
            e.preventDefault();
          }),
        
          el.addEventListener('copy', (e) => {
            e.preventDefault();
          })
          
    },
}