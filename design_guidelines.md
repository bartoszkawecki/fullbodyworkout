# Design Guidelines: Full Body Beginner Workout Tracker

## Design Approach
**System-Based Approach** - Drawing from Material Design principles optimized for mobile utility apps. This workout tracker prioritizes clarity, speed, and effortless navigation during active exercise sessions where users need instant information access.

## Typography System

**Font Family**: Inter (via Google Fonts CDN)
- Primary: Inter for all interface text
- Fallback: system-ui, -apple-system, sans-serif

**Type Scale**:
- Hero/Week Headers: text-3xl, font-bold (30px)
- Day Labels: text-xl, font-semibold (20px)
- Exercise Names: text-lg, font-semibold (18px)
- Set Details: text-base, font-medium (16px)
- Secondary Info (Rest time, RIR): text-sm, font-normal (14px)
- Status Badges: text-xs, font-medium (12px)

## Layout System

**Spacing Primitives**: Use Tailwind units of 3, 4, 6, and 8 consistently
- Component padding: p-4 or p-6
- Section spacing: space-y-6 or space-y-8
- Card gaps: gap-4
- Button padding: px-6 py-3

**Container Strategy**:
- Max-width: max-w-2xl (mobile-optimized, centered on larger screens)
- Screen padding: px-4 on mobile, px-6 on tablet+
- Full-height sections for workout viewer (min-h-screen with flex layout)

**Grid System**:
- Week/Day Selection: Single column on mobile, 2-column grid on tablet+ (grid-cols-1 md:grid-cols-2)
- Exercise sets: Stack vertically with clear separation

## Component Library

### Navigation Header
- Sticky position at top (sticky top-0 z-50)
- Contains: Back arrow, current context (Week X, Day Y), progress indicator
- Height: h-16 with flex items-center justify-between
- Shadow for elevation when scrolling

### Week/Day Selection Cards
- Card style with defined borders and subtle elevation
- Large tap target: min-h-20
- Status indicator positioned top-right (absolute positioning)
- Completion badge (✅) or empty state (▢) with clear visual distinction
- Active/pressed states for tactile feedback

### Exercise Display Cards
- Stacked card layout with generous spacing between exercises
- Exercise name as card header with icon (dumbbell from Heroicons)
- Set rows displayed as list items with clear dividers
- Each set shows: Set number, Reps, RIR, Rest time in scannable format
- Example structure: "Set 1 • 10 reps @ 2 RIR • Rest 90s"

### Progress Indicator
- Fixed position below header
- Shows "Exercise X of Y" with visual progress bar
- Progress bar: h-1 or h-2 with filled/unfilled states

### Action Buttons
- Primary CTA (Next Exercise, Complete Workout): Full-width on mobile, fixed bottom position with safe-area padding
- Large minimum touch target: min-h-14
- Bold, high-contrast treatment
- "Next Exercise" sticky at bottom during workout
- "Complete Workout" appears only on final exercise

### Completion Screen
- Centered content with celebration icon (check-circle from Heroicons, large scale)
- Success message with text-2xl
- "Return Home" button prominently placed
- Minimal confetti effect using CSS (few floating elements, brief animation)

### Status Badges
- Small, rounded badges (rounded-full or rounded-lg)
- Use semantic styling for completed vs. incomplete
- Position: absolute top-2 right-2 on cards

## Interaction Patterns

**Touch Targets**: 
- Minimum 44px height for all interactive elements
- Generous padding around tap zones (p-4 minimum)

**Navigation Flow**:
- Breadcrumb-style context in header (Week 1 > Day 2)
- Back navigation always visible in top-left
- Forward progression via large bottom CTAs

**Loading States**: 
- Minimal since using local storage
- Subtle opacity transition when marking complete

**Empty States**:
- Clear messaging when no workouts completed
- Encouraging copy to start first session

## Accessibility

- All interactive elements keyboard accessible
- Focus states clearly visible (ring-2 ring-offset-2)
- ARIA labels on status indicators and navigation
- Sufficient contrast ratios for all text (WCAG AA minimum)
- Touch targets meet accessibility guidelines (44x44px minimum)

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Full-width buttons
- Sticky navigation elements
- Reduced padding (p-4)

**Tablet+ (≥ 768px)**:
- Max-width container centered
- 2-column grid for week/day selection
- Increased padding (p-6)
- Buttons can be inline rather than full-width on completion screen