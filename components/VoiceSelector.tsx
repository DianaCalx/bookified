"use client";

import { cn } from "@/lib/utils";
import { voiceCategories, voiceOptions } from "@/lib/constant";
import type { VoiceSelectorProps } from "@/types";

const categoryLabels: Record<keyof typeof voiceCategories, string> = {
  male: "Male voices",
  female: "Female voices",
};

const VoiceSelector = ({
  disabled,
  className,
  value,
  onChange,
}: VoiceSelectorProps) => {
  return (
    <div className={cn("space-y-5", className)}>
      {(Object.keys(voiceCategories) as Array<keyof typeof voiceCategories>).map(
        (category) => (
          <div key={category} className="space-y-3">
            <p className="text-sm font-medium text-[var(--text-secondary)]">
              {categoryLabels[category]}
            </p>
            <div className="voice-selector-options">
              {voiceCategories[category].map((key) => {
                const voice = voiceOptions[key as keyof typeof voiceOptions];
                const isSelected = value === voice.id;

                return (
                  <button
                    type="button"
                    key={voice.id}
                    disabled={disabled}
                    onClick={() => onChange(voice.id)}
                    aria-pressed={isSelected}
                    className={cn(
                      "voice-selector-option",
                      isSelected
                        ? "voice-selector-option-selected"
                        : "voice-selector-option-default",
                      disabled && "voice-selector-option-disabled",
                    )}
                  >
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-[var(--text-primary)]">
                        {voice.name}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {voice.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default VoiceSelector;
