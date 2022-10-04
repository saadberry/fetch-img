const image = document.getElementById('himb');
const btn_click = document.getElementById('clickme');
    
    console.log('About to fetch fluffy penguin');
    
    function showIMG(){
        async function getImg() {
            const response = await fetch("linux_penguin2.png");
            const blob = await response.blob();
            document.getElementById('himb').src = URL.createObjectURL(blob);
        }
    
        getImg()
        .then(response => {
            console.log('SUCCESS!');
        })
        .catch(error => {
            console.log('ERROR!');
            console.log(error);
        })
        
       }
    
    

   


   