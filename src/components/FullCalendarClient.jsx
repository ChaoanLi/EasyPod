// src/components/FullCalendarClient.jsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';

export default function FullCalendarClient() {
    const anniversaryEvents = [
        {
            title: '车被拖事件',
            rrule: { freq: 'YEARLY', dtstart: '2025-02-04' },
            extendedProps: {
                originalDate: '2025-02-04',
                description: 'ohaaayooo车被拖事件, 三百美金的罚款！',
                image: '/assets/calendar/toll0204.jpeg',
            },
        },
        {
            title: '不服从调剂事件',
            rrule: { freq: 'YEARLY', dtstart: '2021-03-02' },
            extendedProps: {
                originalDate: '2021-03-02',
                description: 'zwr研究生调剂事件, 还是咱们这个专业更感兴趣一点',
                image: '/assets/calendar/zwr0302.jpg'
            },
        },
        {
            title: '保研事件',
            rrule: { freq: 'YEARLY', dtstart: '2021-03-22' },
            extendedProps: {
                originalDate: '2021-03-22',
                description: 'zwr保研事件，知道了是来还是不来呢？',
                image: '/assets/calendar/zwr0322.jpg'
            },
        },
    ];

    const [selected, setSelected] = useState(null);

    function renderEventContent(arg) {
        const orig = new Date(arg.event.extendedProps.originalDate);
        const years = new Date().getFullYear() - orig.getFullYear();
        const label = years > 0 ? `${years}周年` : '当天';
        return (
            <div>
                <strong>{arg.event.title}</strong>
                <span> ({label})</span>
            </div>
        );
    }

    function handleEventClick(info) {
        const orig = new Date(info.event.extendedProps.originalDate);
        const years = new Date().getFullYear() - orig.getFullYear();
        const label = years > 0 ? `${years}周年` : '当天';
        setSelected({
            title: info.event.title,
            label,
            description: info.event.extendedProps.description,
            image: info.event.extendedProps.image,
        });
    }

    return (
        <>
            <div className="max-w-5xl mx-auto mt-8">
                <FullCalendar
                    plugins={[dayGridPlugin, rrulePlugin]}
                    initialView="dayGridMonth"
                    events={anniversaryEvents}
                    eventContent={renderEventContent}
                    eventClick={handleEventClick}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: '',
                    }}
                    height="auto"
                />
            </div>

            {selected && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-background text-foreground p-6 rounded-lg max-w-lg w-full shadow-lg"
                        onClick={e => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-2">
                            {selected.title} ({selected.label})
                        </h2>
                        {selected.image && (
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="w-full mb-4 rounded"
                            />
                        )}
                        <p className="mb-4">{selected.description}</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => setSelected(null)}
                        >
                            关闭
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
