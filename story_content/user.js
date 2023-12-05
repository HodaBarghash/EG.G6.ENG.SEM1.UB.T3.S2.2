function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gXk8mdMZZN":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v441attempts:player.GetVar("v44q1attempts"),v44q1answeredcorrect:player.GetVar("v44q1answeredcorrect"),v44q2attempts:player.GetVar("v44q2attempts"),v44q2answeredcorrect:player.GetVar("v44q2answeredcorrect")})
	}
	)
}

