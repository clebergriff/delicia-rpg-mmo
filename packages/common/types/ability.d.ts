import { Modules } from '../network';

// Raw ability information from the JSON file.

export interface RawAbilityLevelData {
    cooldown?: number;
    duration?: number;
    mana?: number;
}

export interface RawAbilityData {
    type: string;
    levels?: { [level: number]: RawAbilityLevelData };
}

export type RawAbility = { [key: string]: RawAbilityInfo };

// Object ability information

export interface AbilityData {
    key: string;
    level: number;
    quickSlot?: boolean;
    type?: Modules.AbilityType;
}

export interface SerializedAbility {
    abilities: AbilityData[];
}
