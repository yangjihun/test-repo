export default function StandingVibot({ className }: { className?: string }) {
  return (
    <svg width="35" height="42" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="15.5078" width="7.71377" height="1.57135" rx="0.785674" transform="rotate(-17 12 15.5078)" fill="black"/>
    <rect x="1.09229" y="18.252" width="6.85768" height="1.57135" rx="0.785674" transform="rotate(-50 1.09229 18.252)" fill="black"/>
    <rect x="5" y="24.2539" width="6.85768" height="1.57135" rx="0.785674" transform="rotate(-50 5 24.2539)" fill="black"/>
    <rect x="10.2036" y="19" width="6.85768" height="1.57135" rx="0.785674" transform="rotate(50 10.2036 19)" fill="black"/>
    <mask id="path-5-inside-1_0_1" fill="white">
    <path d="M4 12H16V22C16 22.5523 15.5523 23 15 23H5C4.44772 23 4 22.5523 4 22V12Z"/>
    </mask>
    <path d="M4 12H16V22C16 22.5523 15.5523 23 15 23H5C4.44772 23 4 22.5523 4 22V12Z" fill="white" stroke="black" stroke-width="4" mask="url(#path-5-inside-1_0_1)"/>
    <rect x="2" y="1" width="16" height="12" rx="3" fill="white" stroke="black" stroke-width="2"/>
    <mask id="path-7-inside-2_0_1" fill="white">
    <rect x="5" y="4" width="10" height="6" rx="1.5"/>
    </mask>
    <rect x="5" y="4" width="10" height="6" rx="1.5" fill="white" stroke="black" stroke-width="4" mask="url(#path-7-inside-2_0_1)"/>
    <path d="M18 3H19C19.5523 3 20 3.44772 20 4V6C20 6.55228 19.5523 7 19 7H18V3Z" fill="black"/>
    <path d="M0 4C0 3.44772 0.447715 3 1 3H2V7H1C0.447715 7 0 6.55228 0 6V4Z" fill="black"/>
    <rect x="9" y="4" width="2" height="6" fill="black"/>
    </svg>
  )
}