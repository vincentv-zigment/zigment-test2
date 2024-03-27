import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const emojisDropDown = [
    {
        id: 1,
        emoji: '😀'
    },
    {
        id: 2,
        emoji: '😃'
    },
    {
        id: 3,
        emoji: '😄'
    },
    {
        id: 4,
        emoji: '😁'
    },
    {
        id: 5,
        emoji: '😆'
    },
    {
        id: 6,
        emoji: '😅'
    },
    {
        id: 7,
        emoji: '🤣'
    },
    {
        id: 1,
        emoji: '😀'
    },
    {
        id: 2,
        emoji: '😃'
    },
    {
        id: 3,
        emoji: '😄'
    },
    {
        id: 4,
        emoji: '😁'
    },
    {
        id: 5,
        emoji: '😆'
    },
    {
        id: 6,
        emoji: '😅'
    },
    {
        id: 7,
        emoji: '🤣'
    },
    {
        id: 8,
        emoji: '😂'
    },
    {
        id: 9,
        emoji: '😊'
    },
    {
        id: 10,
        emoji: '😇'
    },
    {
        id: 11,
        emoji: '😍'
    },
    {
        id: 12,
        emoji: '🥰'
    },
    {
        id: 13,
        emoji: '😘'
    },
    {
        id: 14,
        emoji: '😗'
    },
    {
        id: 15,
        emoji: '😚'
    },
    {
        id: 16,
        emoji: '😋'
    },
    {
        id: 17,
        emoji: '😛'
    },
    {
        id: 18,
        emoji: '😜'
    },
    {
        id: 19,
        emoji: '🤪'
    },
    {
        id: 20,
        emoji: '😎'
    },
];



export default function EmojiDropDown({ setuserMessage, userMessage }: any) {
    return (
        <Menu as="div" className="relative inline-block text-left" >
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white p-1 border text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50  ">
                    <svg fill="currentColor" className="w-5 h-5 fill-slate-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"></path>
                    </svg>

                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 bottom-0 mb-9 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1 max-w-sm max-h-md flex flex-wrap">
                        {
                            emojisDropDown.map((x) => (
                                <Menu.Item key={`emoji_icon_key_${x.id}`} >
                                    {({ active, close }) => (
                                        <button
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block text-sm rounded-sm'
                                            )}
                                            onClick={() => { setuserMessage(userMessage + x.emoji); close() }}
                                        >
                                            {x.emoji}
                                        </button>
                                    )}

                                </Menu.Item>
                            ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
