//SIDEBAR//
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES//
const messagesNotifications = document.querySelectorAll('#messages-notification');
const messages = document.querySelectorAll('.messages');
const message = messages.querySelectorAll('.message');
const messageSearchs = document.querySelector('#message-search');

//thEME//
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelector('.choose-color span')




//SIDE BAR//


//remove active from all menu items//
const changeActiveItem = () =>{
    menuItems.forEach(items => {
        items.classList.remove('.active');
    })
}

//active class to active menu//
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add('.active');
        if(item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display ='none'

        }
    }
        )
})


//MESSAGES//
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeOut(() => {
        messages.style.boxShadow = "none";
    }, 2000);
    messagesNotifications.querySelector('.notification-count').style.display= 'none';
    
}
   
)

setTimeOut(() =>  {
    
})

//searches chat//
const searchMessage = () => {
   const val =messageSearchs.value.tolowercase();
   //for every message we have for each loop//
     /*then grab the name of the user, the names are all in h5, 
     grab them with a query selector, grab the text content and chammge it to lower case*/

   message.forEach(
       chat => {
           let name = chat.querySelectorAll('h5').textContent.toLowerCase();
            //match the name that you are getting to the name thatyou typed in//
             //if there is a match the index f the two value will not be negative 1//
            if(name.indexOf(val) != -1){
                       //if there is a match then you display//
           chat.style.display ='flex';
       } else {
           chat.style.display = "none"
       }
    }
   )
}

//search chat//
messageSearchs.addEventListener('keyup', searchMessage);


//THEME  CUSTOMIZARION//

//open model//
const openThemeModel = () => {
    themeModel.style.display = 'grid'
}

//close model//
const closeThemeModel  = (e) => {
   if(e.target.classList.contains('customize-theme')){
       themeModel.style.display = 'none';
   }
}

//close model//
themeModel.addEventListener('click',closeThemeModel);

theme.addEventListener('click', openThemeModel);


//FONTS//

//remove active class from  span or font-size selector//
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');

    } 
    else if (size.classList.contains('font-size-2')) {
        fontSize = '13px'
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '.7rem');
    }
     else if (size.classList.contains('font-size-3')) {
        fontSize = '16px'
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }
    else if (size.classList.contains('font-size-4')) {
        fontSize = '19px'
        root.style.setProperty('----sticky-top-left', '-10rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }
    else if (size.classList.contains('font-size-5')) {
        fontSize = '22px'
    }
 

//change the font size of the root html element//
//we will grab the  html element and change it to our font-size//
document.querySelector('html').style.fontSize ='font-size'

      })
/*remove active class for colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

}) 
*/

/*change primary color//
colorPalette.forEach(color => {
     color.addEventListener('click', () => {
         let primary;
         changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue =352;
        }
        if(color.classList.contains('color-4')){
            primaryHue =152;
        }
        if(color.classList.contains('color-5')){
            primaryHue =202;
        }

        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
     })
}
}
)

