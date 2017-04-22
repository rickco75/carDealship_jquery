let drawTriangle = function () {
         /* Get the canvas's element*/
         let  canvasTri = document.getElementById('canvasTri'),
               context = null;
           if (Modernizr.canvas) {
                /* Access the canvas's context*/
               context = canvasTri.getContext('2d');
                /* 1st step in drawing a shape*/
               context.beginPath();
                /* Put your pencil down on the paper at this point*/
               context.moveTo(75, -5);
                 /* Draw vertical side of triangle*/
               context.lineTo(75, -100);
               /* create a horizontal line as the bottom of the triangle*/
               context.lineTo(25, 100);
                /*shape complete Now fill object*/
               context.fill();
           }
         };

         let drawTETRIS = function () {
           // Get the canvas's element
           let canvasTETRIS = document.querySelector('#canvasTETRIS');
           let context = null;
           // feature detection using Modernizr
           if (Modernizr.canvas) {
              // Access the canvas's context
              context = canvasTETRIS.getContext('2d');
              context.beginPath();
              context.moveTo(100, 100);
              context.lineTo(100, 300);
              context.lineTo(150, 300);
              context.lineTo(150, 155);
              context.lineTo(205, 155);
              context.lineTo(205, 100);
              context.closePath();
              context.fillStyle = '#0099ff';
              context.fill();
              context.lineWidth = 6;
              context.lineJoin = 'round';
              context.strokeStyle = '#cccccc';
              context.stroke();
           }
         };

         let drawRectangles = function() {
           // Get the canvas's element
           let canvas = document.getElementById('canvasRectangles');
           let context = null;

           // feature detection using Modernizr
           if (Modernizr.canvas) {
             // Access the canvas's context
             context = canvas.getContext('2d');
             // red box
             context.fillStyle = 'rgb(500,0,0)';
             context.fillRect(
               50, // x coord
               50, // y coord
               100, // width
               100); // height
             // blue box (with transparency)
             context.fillStyle = 'rgba(0, 0, 500, 0.5)';
             context.fillRect(
               80, // x coord
               80, // y coord
               100, // width
               100); // height
             // clear box
             context.clearRect(
               115, // x coord
               115, // y coord
               20, // width
               20); // height
             // green outline
             context.strokeStyle = 'rgb(51,153,0)';
             context.lineWidth = 6;
             context.strokeRect(115, 115, 20, 20);
           };
         };

         let drawArcs = function() {
           //example code goes here
           let canvas = document.getElementById('canvasAcrs');
           let context = null;
           if (Modernizr.canvas) {
             context = canvas.getContext('2d');
             var g1 = context.createRadialGradient(
               160, // X coordinate of grad. start
               120, // Y coordinate of grad. start
               100, // Radius of the start circle
               320, // X coordinate of grad. end
               220, // Y coordinate of grad. end
               300 // Radius of the end circle
             );
             g1.addColorStop(0, '#ffffff');
             g1.addColorStop(.5, '#49445d');
             g1.addColorStop(1, '#999999');
             // base circle
             context.lineWidth = 0;
             context.strokeStyle = '#000000';
             context.fillStyle = g1;
             context.beginPath();
             context.arc(
               180, // X coordinate of arc start
               180, // Y coordinate of arc start
               260, // Radius
               0, // Start angle
               Math.PI * 2, // End angle
               true // Anticlockwise
             );
             context.fill();
             var g2 = context.createRadialGradient(360, 320,
               0,
               260,
               220,
               200);
             g2.addColorStop(0, '#ffffff');
             g1.addColorStop(.75, '#49445d');
             g2.addColorStop(1, '#999999');
             // inner circle
             context.fillStyle = g2;
             context.beginPath();
             context.arc(
               180,
               180,
               130,
               0,
               Math.PI * 2,
               true
             );
             context.fill();
             context.fillStyle = '#ffffff';
             context.font = '280px Arial';
             context.fillText('C', 80, 280);
           }
         };
