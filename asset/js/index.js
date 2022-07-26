///// fechas

const dateFormat = (time, format = 'DD/MM/YYYY') => {
    // Con el moment.unix generamos una fecha a partir de un timestamp y luego aplicamos el format 
    return moment.unix(time).format(format);
  };

  /// 

  const sor = new Sortable.default(
    //Referenciamos todos los container-tasks
    document.querySelectorAll('.card-body'),
    //Hacemos ordenables todos los article de las tareas
    { draggable: 'article' }
  );


