$(function () {

  let img = document.querySelector('#dragMe');
  let target = document.querySelector('#target-container');


  let dragStartHandler = function (e) {
      $(this).addClass('drag');

      let dto = e.dataTransfer;

      try {
          dto.setData('text/plain',
          e.target.id);
      } catch (ex) {
          dto.setData('Text',
          e.target.id);
      }

      sourceContainerId = this.parentElement.id;
  };

  dragOver = function (e) {
      cancel(e);

      $(this).addClass('over');
  },

  dragLeave = function (e) {
      $(this).removeClass('over');
  },

  dragEnd = function (e) {
      $('.drag').removeClass('drag');
      $('.over').removeClass('over');
  }

  // let dragStartHandler = function (e) {
  //     // IE doesn't support text/plain
  //     //console.log("dragStartHandler: " + e);
  //     try {
  //         e.dataTransfer.setData('text/plain',e.target.id);
  //     } catch (ex) {
  //         e.dataTransfer.setData('Text', e.target.id);
  //     }
  // };

  img.addEventListener('dragstart', dragStartHandler, false);

  let droppedHandler = function (e) {
      cancel(e);
      //console.log(e);
      let id;
      try {
          id = e.dataTransfer.getData('text/plain');
      } catch (ex) {
          id = e.dataTransfer.getData('Text');
      }
      let data = document.getElementById(id);
      //console.log("dropHandler: " + e);
      try {
        e.target.appendChild(data);
      }
      catch (err) {
        console.log("Error Name: " + err.name + " Error Message: " + err.message + " -- source and target cannot be the same!");
      }
  };
  target.addEventListener('drop', droppedHandler, false);

  let cancel = function (e) {
    //console.log(e);
    if (e.preventDefault) {
            //console.log("e.preventDefault: " + e);
        e.preventDefault();
    }

    if (e.stopPropagation) {
        //console.log("e.stopPropagation: " + e);
        e.stopPropagation();
    }

    return false;
  };

  forEach = Array.prototype.forEach;

  let selector = '[data-role="drag-drop-container"]',
  containers = $(selector);

  containers.each(function (index, c) {
    c.addEventListener('drop', droppedHandler, false);
    c.addEventListener('dragenter', cancel, false);
    c.addEventListener('dragover', dragOver, false);
    c.addEventListener('dragleave', dragLeave, false);
  });

  let sources = $('[draggable="true"]');

  sources.each(function (index, source) {
    source.addEventListener('dragstart', dragStartHandler, false);
    source.addEventListener('dragend', dragEnd, false);
  });
  
  // let selector = '[data-role="drag-drop-container"]',
  //     dc = document.
  //     querySelectorAll(selector);
  //
  // forEach.call(dc, function (c) {
  //     //console.log("dc: " + dc + "  c:" + c);
  //     c.addEventListener('drop', droppedHandler, false);
  //     c.addEventListener('dragenter', cancel, false);
  //     c.addEventListener('dragover', cancel, false);
  // });

  //let selector = '[draggable="true"]',
  let ds = document.querySelectorAll(selector);

  forEach.call(ds, function (source) {
      //console.log("foreach.call" + ds);
      source.addEventListener('dragstart', dragStartHandler, false);
  });

           //---
          //  let sourceContainerId = '',
          //      cancel = function (e) {
          //          if (e.preventDefault) {
          //              e.preventDefault();
          //          }
          //          if (e.stopPropagation) {
          //              e.stopPropagation();
          //          }
          //          return false;
          //      },
          //      dragStartHandler = function (e) {
          //          $(this).addClass('drag');
          //          let dto = e.dataTransfer;
          //          try {
          //              dto.setData('text/plain', e.target.id);
          //          } catch (ex) {
          //              dto.setData('Text',
          //              e.target.id);
          //          }
          //          sourceContainerId = this.parentElement.id;
          //      },
          //      droppedHandler = function (e) {
          //          cancel(e);
          //          var
          //          id = null,
          //              dto = e.dataTransfer,
          //              droppedHandler = null;
          //          if (dto.types.length > 0) {
          //              if (dto.types[0] === 'Text') {
          //                  id = dto.getData('Text');
          //              } else {
          //                  id = dto.getData('text/plain');
          //              }
          //          }
          //          if (id !== null) {
          //              droppedHandler = document.getElementById(id);
          //          }
          //          if (this.id !== sourceContainerId) {
          //              e.target.appendChild(droppedHandler);
          //              $(droppedHandler).removeClass('drag');
          //          }
          //          $(this).removeClass('over');
          //      },
          //      dragOver = function (e) {
          //          cancel(e);
          //          $(this).addClass('over');
          //      },
          //      dragLeave = function (e) {
          //          $(this).removeClass('over');
          //      },
          //      dragEnd = function (e) {
          //          $('.drag').removeClass('drag');
          //          $('.over').removeClass('over');
          //      };
          //  let selector = '[data-role="drag-drop-container"]',
          //      containers = $(selector);
          //  containers.each(function (index, c) {
          //      c.addEventListener('drop', droppedHandler, false);
          //      c.addEventListener('dragenter', cancel, false);
          //      c.addEventListener('dragover', dragOver, false);
          //      c.addEventListener('dragleave', dragLeave, false);
          //  });
          //  let  sources = $('[draggable="true"]');
          //  sources.each(function (index, source) {
          //      source.addEventListener('dragstart',dragStartHandler,false);
          //      source.addEventListener('dragend',dragEnd, false);
          //  });
           //---
       });
