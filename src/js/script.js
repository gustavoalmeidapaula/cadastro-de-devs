const button = document.getElementById('button')
const form = document.getElementById('form')

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

    button.addEventListener('click', (ev) =>{
        ev.preventDefault()

        let number_input = 0
        number_input++

        const button_cadastrar = document.getElementById('cadastrar')
        const div = document.getElementById('bloco')

        const bloco = document.createElement('div')
        const br = document.createElement('br')
        const br1 = document.createElement('br')
        const br2 = document.createElement('br')
        const br3 = document.createElement('br')

        const label_Tecnologia = document.createElement('label')
        label_Tecnologia.innerText = 'Nome da tecnologia'
        label_Tecnologia.setAttribute('for','tecnologias') 

        const input_tecnologias = document.createElement('input')
        input_tecnologias.type = 'text'
        input_tecnologias.name = 'tecnologias'
        input_tecnologias.id = 'tecnologias'
        input_tecnologias.placeholder = 'Digite o nome da tecnologia'
        input_tecnologias.className = 'input_text_tecnologias'

        const subTitulo = document.createElement('label')
        subTitulo.innerText = 'Tempo de experiência:'
        subTitulo.setAttribute('for','input_time' + number_input) 

        const input_time1 = document.createElement('input')
        input_time1.type = 'radio'
        input_time1.name = 'input_time' + number_input
        input_time1.id ='input_time1-' + number_input
        input_time1.value = '0-2 anos'

        const label_time1 = document.createElement('label')
        label_time1.innerText = ' 0-2 anos '
        label_time1.setAttribute('for', 'input_time1-' + number_input)

        const input_time2 = document.createElement('input')
        input_time2.type = 'radio'
        input_time2.name = 'input_time' + number_input
        input_time2.id ='input_time2-' + number_input
        input_time2.value = '3-4 anos'

        const label_time2 = document.createElement('label')
        label_time2.innerText = ' 3-4 anos '
        label_time2.setAttribute('for', 'input_time2-' + number_input)

        const input_time3 = document.createElement('input')
        input_time3.type = 'radio'
        input_time3.name = 'input_time' + number_input
        input_time3.id ='input_time3-' + number_input
        input_time3.value = '5+ anos'

        const label_time3 = document.createElement('label')
        label_time3.innerText = ' 5+ anos '
        label_time3.setAttribute('for', 'input_time3-' + number_input)

        const remove = document.createElement('button')
        remove.innerText = 'Remover tecnologia'

        bloco.append(label_Tecnologia,br,input_tecnologias,br1,subTitulo,br2,input_time1,label_time1,input_time2,label_time2,input_time3,label_time3,br3,remove)
        div.appendChild(bloco)
        form.appendChild(div)

        remove.addEventListener('click', (ev) =>{
            ev.preventDefault()
            div.removeChild(bloco)
        })


        button_cadastrar.addEventListener('click', (ev) => {
            ev.preventDefault()

            const name = document.getElementById('name').value
            const tecnologia_name = input_tecnologias.value
            let time_tecnologias = ''

            document.querySelectorAll("input[type= 'radio']:checked").forEach(function (item){
                time_tecnologias += ' - ' + item.value + '\n'
            })

            console.log({name, tecnologia_name, time_tecnologias})

            alert(
                "Cadastro concluído" +
            "\nNome do desenvolvedor: " + name +
            "\nNome da tecnologia: " + tecnologia_name +
            "\nTempo de experiência: " + time_tecnologias 
            )
        })
    })
})