import React from 'react';
import NotificationElement from './NotificationElement';

export default function MainNotification() {
  return (
    <div className="h-fit w-full flex flex-col bg-white border-[1px] rounded-lg border-slate-200">
      <NotificationElement />
      <NotificationElement />
      <NotificationElement />
    </div>
  );
}
