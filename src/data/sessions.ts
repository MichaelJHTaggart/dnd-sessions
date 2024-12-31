export interface Session {
  title: string;
  date: string;
  summary: string;
  sessionNumber: number;
  content: string;
}

export const sessions: Session[] = [
  {
    title: "The Beginning of Our Journey",
    date: "2025-01-15",
    summary: "Our party met in the Tavern of the Last Home...",
    sessionNumber: 1,
    content: `
# The Beginning of Our Journey

Our party's tale begins in the cozy confines of the Tavern of the Last Home, where fate would intertwine our destinies. The air was thick with the smell of spiced mead and the crackling warmth of the hearth fire...

## Key Events
- First meeting at the Tavern of the Last Home
- Mysterious stranger's proposition
- Discovery of the ancient map

## Notable Characters
- The mysterious hooded figure
- Old Tom, the tavern keeper
- The wandering bard who spoke of ancient prophecies

## Rewards and Treasures
- Ancient map to the lost temple
- 50 gold pieces advance payment
- Magical compass that points to danger
    `
  },
  {
    title: "Into the Dark Forest",
    date: "2025-01-22",
    summary: "Venturing deep into the Misty Woods...",
    sessionNumber: 2,
    content: `
# Into the Dark Forest

The Misty Woods lived up to their name as our party ventured deeper into their mysterious depths. The ancient trees seemed to whisper secrets as we passed...

## Key Events
- Encounter with the forest sprites
- Battle with corrupted wolves
- Discovery of the ancient druid circle

## Notable Characters
- Elder Moonwhisper, the forest sprite
- The corrupted wolf pack alpha
- Ghost of the ancient druid

## Rewards and Treasures
- Blessed seedling of the World Tree
- Wolf alpha's enchanted fang
- Ancient druidic teachings
    `
  }
];