import React from "react";
import {
    GoogleCalendar,
    ICalendar,
    YahooCalendar,
    OutlookCalendar,
} from "datebook";

const AddToCalendarButton = ({ description, dateUtc, title }) => {
    const start = new Date(dateUtc);
    const end = new Date();
    end.setTime(start.getTime() + 60 * 60 * 1000);

    const config = {
        title,
        description,
        start,
        end,
    };

    const googleCalendarLink = new GoogleCalendar(config).render();
    const outlookCalendarLink = new OutlookCalendar(config).render();
    const yahooCalendarLink = new YahooCalendar(config).render();

    const downloadIcsHandler = () => {
        const icalendar = new ICalendar(config);
        icalendar.download();
    };

    return (
        <div className="dropdown">
            <button
                className="add-to-calendar dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                ADD TO CALENDAR
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                    href={googleCalendarLink}
                    className="dropdown-item"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Google Calendar
                </a>
                <button
                    className="dropdown-item"
                    onClick={downloadIcsHandler}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Download .ics file
                </button>
                <a
                    href={outlookCalendarLink}
                    className="dropdown-item"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Outlook Calendar
                </a>
                <a
                    href={yahooCalendarLink}
                    className="dropdown-item"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Yahoo! Calendar
                </a>
            </div>
        </div>
    );
};

export default AddToCalendarButton;
