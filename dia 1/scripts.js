const panels = document.querySelectorAll('.pita')

panels.forEach(pita => {
    pita.addEventListener('click', () => {
        removeActiveClasses()
        pita.classList.add('n1')
    })
})

function removeActiveClasses() {
    panels.forEach(pita => {
        pita.classList.remove('n1')
    })
}