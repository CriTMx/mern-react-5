import {useState} from 'react';

function Form()
{
    var [res, setRes] = useState();
    var [dob, setDob] = useState();

    function CalcAge()
    {
        var dobYr = dob.split('-')[0];
        var dobMo = dob.split('-')[1];
        var dobDy = dob.split('-')[2];

        var date = new Date();
        var curYr = date.getFullYear();
        var curMo = date.getMonth() + 1;
        var curDy = date.getDate();

        var hasBirthdayPassed;
        if (curMo > dobMo)
        {
            hasBirthdayPassed = true;
        }
        else if (curMo == dobMo)
        {
            hasBirthdayPassed = (curDy >= dobDy);
        }
        else hasBirthdayPassed = false;

        setRes(hasBirthdayPassed ? (curYr - dobYr) : (curYr - dobYr - 1));
    }

    function HandleDoBInput(event)
    {
        setDob(event.target.value);
    }

    return (
        <div className="form">
            <h4>Enter your date of birth</h4>
            <input name="dob" className="dob-input" type='date' onChange={HandleDoBInput}></input>
            <button type="button" onClick={CalcAge}>Calculate Age</button>
            <h3>Your age is: {res}</h3>
        </div>
    )
}

export default Form;