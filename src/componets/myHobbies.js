import React from 'react';
import './../style/table.css';
import './../style/componets/myhobbies.css';
const MyHobbies = () => (
    <div className='myhobbies'>
    <h3>Passions</h3>
    <p>I'm a passionate bookworm who finds solace in the pages of literary wonders, and when I'm not lost in the world of words, you can find me running, chasing after both dreams and miles.</p>
    <table>
        <thead>
            <tr>
                <td>Title</td>
                <td>Author</td>
                <td> Rating</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Six Thinking Hats</td>
                <td>Bono Edward De</td>
                <td>3.72</td>
            </tr>
            <tr>
                <td>The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma</td>
                <td>Bessel van der Kolk</td>
                <td>4.43</td>
            </tr>
            <tr>
                <td>The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win</td>
                <td>Kevin Behr, George Spafford</td>
                <td>4.26</td>
            </tr>
            <tr>
                <td>Why Has Nobody Told Me This Before?</td>
                <td>Julie Smith</td>
                <td>3.92</td>
            </tr>
            <tr>
                <td>The Psychology of Money</td>
                <td>Morgan Housel</td>
                <td>4.36</td>
            </tr>
        </tbody>
    </table>
    </div>
);
export default MyHobbies;