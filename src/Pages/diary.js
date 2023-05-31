import React from "react";
import './diary.css';

function Diary () {
    return (
        <table>
            <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1st</td>
                <td>2nd - <strong>p7 Visit to local library</strong></td>
                <td>3rd</td>
                <td>4th</td>
                <td>5th</td>
                <td>6th</td>
                <td>7th</td>
                
            </tr>
            <tr>
                <td>8th - <strong>p6 Residential - leave school at 10am</strong></td>
                <td>9th</td>
                <td>10th - <strong>p6 Return from residential at 2pm</strong></td>
                <td>11th</td>
                <td>12th - <strong>p4 Class Assembly, 9.30am</strong></td>
                <td>13th</td>
                <td>14th</td>
                
            </tr>
            <tr>
                <td>15th</td>
                <td>16th</td>
                <td>17th - <strong>Parent Council Bingo night, 6pm in hall</strong></td>
                <td>18th</td>
                <td>19th</td>
                <td>20th</td>
                <td>21st</td>
                
            </tr>
            <tr>
                <td>22nd - <strong>p1-p3 Teddy Bear's picnic in the park, 1pm-3pm</strong></td>
                <td>23rd</td>
                <td>24th</td>
                <td>25th - <strong>Completed orders for leaver's hoodies due today</strong></td>
                <td>26th</td>
                <td>27th</td>
                <td>28th</td>
                
            </tr>
            <tr>
                <td>29th - <strong>School Sports Day - 9.30am-2pm, parents welcome</strong></td>
                <td>30th</td>
                <td>31st</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                          
            </tr>
            </tbody>
        </table>

    )
}

export default Diary;