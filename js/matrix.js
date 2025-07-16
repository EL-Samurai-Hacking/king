
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');

    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    
    const arabic = 'أبجدهوزحطيكلمنسعفصقرشتثخذضظغ٠١٢٣٤٥٦٧٨٩';
    const english = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>/?~`';
    const chars = arabic + english + special;

   
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height);
    }

    
    const neonGreen = '#00ff41';

    
    function draw() {
        
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        
        ctx.fillStyle = neonGreen;
        ctx.font = `${fontSize}px monospace`;

        
        for (let i = 0; i < drops.length; i++) {
           
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            
         
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

           
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            
            drops[i]++;
        }
    }

    setInterval(draw, 33);
});
