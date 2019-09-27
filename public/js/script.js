const BgAndFont = {
  "danger" : {
    tt : "text-white bg-danger"
  },
  "warning" : {
    tt : "text-black bg-warning"
  },
  "info" : {
    tt : "text-white bg-info"
  },
  "secondary" : {
    tt : "text-white bg-secondary"
  },
  "light" : {
    tt : "text-black bg-light"
  }
}

$.get('/depremgetir', function(deprems){
  for(let i=0; 0 < deprems.length && i< 12; i++){
    var color = "";
    if(deprems[i]['m'] < 1.8){
      color = BgAndFont.light.tt;
    }else if(deprems[i]['m'] < 2.7){
      color = BgAndFont.secondary.tt;
    }else if(deprems[i]['m'] < 4.5){
      color = BgAndFont.info.tt;
    }else if(deprems[i]['m'] < 5.8){
      color = BgAndFont.warning.tt;
    }else{
      color = BgAndFont.danger.tt;
    }

      $('#DetailCards').append(`
        <div class="col-ms-4 col-md-3">
          <div class="card ${color} mb-3">
            <div class="card-header">
            ${deprems[i]['time']}
            <span class="badge badge-pill badge-dark" style="float:right">
            <i class="fas fa-wave-square"></i><a><strong>${deprems[i]['m']}</strong></a></span>
            </div>
            <div class="card-body">
              <h5 class="card-title" style="font-size:13px">${deprems[i]['other']}</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      `);
    }
  })