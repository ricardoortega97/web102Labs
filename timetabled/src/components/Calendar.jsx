import React from 'react';
import Event from './Event';

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Cafe ☕️' color='green' location='Starbucks' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Breakfast 🥞' color='green' location='Maple & Ash' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event='Pool 🐳' color='light-blue' location='Water Park' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Shopping 🧢' color='yellow' location='Mall' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event event='Art Gallery 🖼️' color='purple' location='Art Museum ' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch 🍜' color='green' location='food mart'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Shrine ⛩️' color='pink' location='Osaka'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch 🍜' color='green' location='food mart'/>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Kimono 👘 ' color='pink' location='park'/>
                        <Event event='Sakura Trees 🌸 ' color='pink' location='park'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch 🍜' color='green' location='food mart'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Nintendo Park 👾' color='red' location="Nintendo Land" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Festival 🎍' color='purple' location='park'/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Calendar;
