type Event = {
    name: string;
    description: string;
    year: string;
    image: string;
    registrationOpen: boolean;
    nextEvent: boolean;
    url?: string;
}

export const EVENTS: Event[] = [
    {
        name: 'First Byte',
        description: 'First Byte description here',
        year: '2025',
        image: '',
        registrationOpen: false,
        nextEvent: false,
        url: ''
    },
    {
        name: 'BOLT Connect',
        description: 'BOLT Connect description here',
        year: '2025',
        image: '',
        registrationOpen: false,
        nextEvent: false,
    },
    {
        name: 'BOLT Circuit',
        description: 'BOLT Circuit description here',
        year: '2025',
        image: '',
        registrationOpen: true,
        nextEvent: true,
    },
    {
        name: 'BOLT Bootcamp',
        description: 'Bootcamp description here',
        year: '2025',
        image: '',
        registrationOpen: false,
        nextEvent: false,
        url: ''
    },

]