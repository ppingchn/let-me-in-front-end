import { AiOutlineSearch } from 'react-icons/ai';
import MessageListElement from './MessageListElement';

export default function MessageList() {
  return (
    <div className="h-full bg-white w-full rounded-l-lg">
      <div className="flex justify-between h-13 px-3 py-3 rounded-tl-lg border-b-[1px] border-slate-200">
        Massaging
      </div>
      <div className="flex px-3 py-2 items-center w-full">
        <div className="flex items-center bg-gray rounded px-4 w-full">
          <AiOutlineSearch />
          <input
            type="search"
            className="h-8 border-0 border-transparent focus:outline-none focus:ring-0 focus:border-none bg-gray"
            placeholder="Search messages"
          />
        </div>
      </div>
      <div className="flex flex-col w-full rounded-bl-lg">
        <MessageListElement active={true} />
        <MessageListElement />
        <MessageListElement />
      </div>
    </div>
  );
}
