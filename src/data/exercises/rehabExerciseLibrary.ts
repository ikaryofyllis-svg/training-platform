import { InjuryGroup, RehabEquipment, RehabExercise, RehabFunction, RehabStage } from '../../types';

export const INJURY_GROUPS: { id: InjuryGroup; label: string; icon: string }[] = [
  { id: 'knee', label: 'Knee', icon: 'directions_walk' },
  { id: 'ankle_foot', label: 'Ankle & foot', icon: 'footprint' },
  { id: 'hip', label: 'Hip', icon: 'accessibility_new' },
  { id: 'shoulder', label: 'Shoulder', icon: 'sports_gymnastics' },
  { id: 'elbow', label: 'Elbow', icon: 'fitness_center' },
  { id: 'wrist_hand', label: 'Wrist & hand', icon: 'back_hand' },
  { id: 'back_neck', label: 'Back & neck', icon: 'airline_seat_recline_normal' },
  { id: 'other', label: 'Other', icon: 'medical_services' }
];

export const REHAB_STAGES: { id: RehabStage; level: number; label: string; description: string }[] = [
  { id: 'protect', level: 1, label: 'Protect & settle', description: 'Only movements specifically cleared after injury or surgery.' },
  { id: 'mobility', level: 2, label: 'Restore motion', description: 'Clinician-approved range of motion and gentle mobility.' },
  { id: 'activation', level: 3, label: 'Reactivate', description: 'Control, neural activation and basic stability.' },
  { id: 'strength', level: 4, label: 'Build capacity', description: 'Progressive strength and functional control.' },
  { id: 'impact', level: 5, label: 'Impact & agility', description: 'Landing, jumping and direction-change preparation.' },
  { id: 'return_to_sport', level: 6, label: 'Return to sport', description: 'Advanced sport-specific work after testing and clearance.' }
];

export const REHAB_EQUIPMENT: { id: RehabEquipment; label: string }[] = [
  { id: 'bodyweight', label: 'Bodyweight' }, { id: 'assisted', label: 'Assisted' },
  { id: 'band', label: 'Bands' }, { id: 'roller', label: 'Roller' },
  { id: 'free_weight', label: 'Weights' }, { id: 'machine', label: 'Machine' },
  { id: 'ball', label: 'Ball' }, { id: 'step', label: 'Step' }
];

export const REHAB_FUNCTIONS: { id: RehabFunction; label: string }[] = [
  { id: 'pain_relief', label: 'Pain relief' }, { id: 'range_of_motion', label: 'Range of motion' },
  { id: 'neural_activation', label: 'Neural activation' }, { id: 'stability', label: 'Stability' },
  { id: 'strength', label: 'Strength' }, { id: 'balance', label: 'Balance' },
  { id: 'lateral_movement', label: 'Lateral movement' }, { id: 'plyometrics', label: 'Plyometrics' }
];

const exercise = (
  id: string, name: string, description: string, muscleGroups: RehabExercise['muscleGroups'],
  injuryGroups: InjuryGroup[], stages: RehabStage[], equipment: RehabEquipment[],
  functions: RehabFunction[], keywords: string[] = [], clinicianClearance = false
): RehabExercise => ({ id, name, description, muscleGroups, injuryGroups, stages, equipment, functions, keywords, clinicianClearance });

export const REHAB_EXERCISE_LIBRARY: RehabExercise[] = [
  exercise('rehab_ankle_pumps', 'Ankle pumps', 'Gentle ankle bending and straightening.', ['calves', 'recovery'], ['ankle_foot', 'knee', 'hip'], ['protect', 'mobility'], ['bodyweight'], ['range_of_motion', 'neural_activation'], ['circulation', 'dorsiflexion', 'plantarflexion']),
  exercise('rehab_quad_set', 'Quadriceps set', 'Static thigh contraction with the leg supported.', ['quads', 'recovery'], ['knee'], ['protect', 'activation'], ['bodyweight', 'assisted'], ['neural_activation', 'stability'], ['isometric', 'quad activation']),
  exercise('rehab_heel_slide', 'Supported heel slide', 'Supported knee and hip bending within the prescribed range.', ['quads', 'hamstrings', 'recovery'], ['knee', 'hip'], ['protect', 'mobility'], ['assisted', 'bodyweight'], ['range_of_motion'], ['knee flexion', 'bed exercise']),
  exercise('rehab_knee_extension_prop', 'Supported knee extension', 'A supported position used to work toward knee straightening.', ['quads', 'recovery'], ['knee'], ['mobility'], ['assisted', 'roller'], ['range_of_motion'], ['extension', 'towel roll']),
  exercise('rehab_straight_leg_raise', 'Straight-leg raise', 'Controlled leg raise while maintaining a straight knee.', ['quads', 'lower_body', 'core'], ['knee', 'hip'], ['activation', 'strength'], ['bodyweight'], ['neural_activation', 'strength', 'stability'], ['slr', 'hip flexor']),
  exercise('rehab_seated_knee_extension', 'Seated knee extension', 'Controlled knee straightening from a supported seated position.', ['quads'], ['knee'], ['mobility', 'activation', 'strength'], ['bodyweight', 'band'], ['range_of_motion', 'strength'], ['long arc quad']),
  exercise('rehab_terminal_knee_extension', 'Band terminal knee extension', 'Band-resisted control into knee extension.', ['quads'], ['knee'], ['activation', 'strength'], ['band'], ['neural_activation', 'strength', 'stability'], ['tke', 'lockout']),
  exercise('rehab_sit_to_stand', 'Assisted sit-to-stand', 'Functional rising from a chair with the support prescribed for you.', ['quads', 'glutes', 'core'], ['knee', 'hip', 'ankle_foot'], ['activation', 'strength'], ['bodyweight', 'assisted'], ['strength', 'stability'], ['chair', 'squat', 'daily living']),
  exercise('rehab_step_up', 'Low step-up', 'Controlled ascent and descent on a clinician-approved step height.', ['quads', 'glutes', 'calves'], ['knee', 'hip', 'ankle_foot'], ['strength'], ['step', 'assisted'], ['strength', 'stability', 'balance'], ['stairs', 'functional']),
  exercise('rehab_lateral_step_down', 'Lateral step-down', 'Single-leg control while lowering the opposite heel toward the floor.', ['quads', 'glutes', 'core'], ['knee', 'hip', 'ankle_foot'], ['strength'], ['step'], ['strength', 'stability', 'lateral_movement'], ['eccentric', 'alignment']),
  exercise('rehab_wall_sit', 'Supported wall sit', 'Isometric lower-body hold at an approved knee angle.', ['quads', 'glutes'], ['knee', 'hip'], ['strength'], ['bodyweight'], ['strength', 'stability'], ['isometric', 'squat']),
  exercise('rehab_split_squat_assisted', 'Assisted split squat', 'Supported staggered-stance lowering through an approved range.', ['quads', 'glutes', 'hamstrings'], ['knee', 'hip', 'ankle_foot'], ['strength'], ['assisted', 'bodyweight'], ['strength', 'balance', 'stability'], ['lunge', 'unilateral']),

  exercise('rehab_ankle_alphabet', 'Ankle alphabet', 'Trace small letters with the foot to explore ankle motion.', ['calves', 'recovery'], ['ankle_foot'], ['mobility'], ['bodyweight'], ['range_of_motion', 'neural_activation'], ['circles', 'mobility']),
  exercise('rehab_calf_stretch_wall', 'Supported calf stretch', 'Wall-supported calf stretch in a clinician-approved position.', ['calves', 'recovery'], ['ankle_foot', 'knee'], ['mobility'], ['assisted', 'bodyweight'], ['range_of_motion'], ['heel cord', 'gastrocnemius', 'soleus']),
  exercise('rehab_band_dorsiflexion', 'Band ankle dorsiflexion', 'Pull the foot upward against light band resistance.', ['calves'], ['ankle_foot'], ['activation', 'strength'], ['band'], ['neural_activation', 'strength'], ['tibialis anterior']),
  exercise('rehab_band_inversion_eversion', 'Band inversion and eversion', 'Controlled inward and outward ankle movement against a band.', ['calves', 'recovery'], ['ankle_foot'], ['activation', 'strength'], ['band'], ['strength', 'stability'], ['peroneal', 'ankle control']),
  exercise('rehab_double_heel_raise', 'Supported double-leg heel raise', 'Rise onto both forefeet while using support as needed.', ['calves'], ['ankle_foot', 'knee'], ['activation', 'strength'], ['bodyweight', 'assisted'], ['strength', 'balance'], ['calf raise']),
  exercise('rehab_single_heel_raise', 'Single-leg heel raise', 'Single-leg calf strength through a controlled range.', ['calves'], ['ankle_foot'], ['strength'], ['bodyweight', 'assisted'], ['strength', 'balance', 'stability'], ['calf endurance']),
  exercise('rehab_single_leg_balance', 'Supported single-leg balance', 'Balance on one leg with a stable support within reach.', ['calves', 'glutes', 'core'], ['ankle_foot', 'knee', 'hip'], ['activation', 'strength'], ['bodyweight', 'assisted'], ['balance', 'stability', 'neural_activation'], ['proprioception']),
  exercise('rehab_foam_roll_calf', 'Calf foam roll', 'Self-massage of the calf, avoiding wounds and sensitive surgical areas.', ['calves', 'recovery'], ['ankle_foot', 'knee'], ['mobility', 'strength'], ['roller'], ['pain_relief', 'range_of_motion'], ['self massage', 'soft tissue']),

  exercise('rehab_glute_set', 'Glute set', 'Static glute contraction in a supported position.', ['glutes', 'recovery'], ['hip', 'knee', 'back_neck'], ['protect', 'activation'], ['bodyweight'], ['neural_activation', 'stability'], ['isometric']),
  exercise('rehab_bridge', 'Bridge', 'Controlled hip lift while keeping the trunk stable.', ['glutes', 'hamstrings', 'core'], ['hip', 'knee', 'back_neck'], ['activation', 'strength'], ['bodyweight', 'band'], ['strength', 'stability', 'neural_activation'], ['hip extension']),
  exercise('rehab_clamshell', 'Clamshell', 'Side-lying hip rotation without rolling the pelvis backward.', ['glutes', 'core'], ['hip', 'knee'], ['activation', 'strength'], ['bodyweight', 'band'], ['neural_activation', 'stability', 'strength'], ['glute medius']),
  exercise('rehab_side_lying_abduction', 'Side-lying hip abduction', 'Controlled straight-leg lift to train lateral hip support.', ['glutes', 'core'], ['hip', 'knee'], ['activation', 'strength'], ['bodyweight'], ['strength', 'stability'], ['glute medius', 'lateral hip']),
  exercise('rehab_lateral_band_walk', 'Lateral band walk', 'Controlled side steps while maintaining lower-limb alignment.', ['glutes', 'quads', 'core'], ['hip', 'knee', 'ankle_foot'], ['strength'], ['band'], ['strength', 'stability', 'lateral_movement'], ['monster walk', 'side step']),
  exercise('rehab_hip_hinge', 'Supported hip hinge', 'Practice bending from the hips with a neutral, controlled trunk.', ['glutes', 'hamstrings', 'core'], ['hip', 'knee', 'back_neck'], ['activation', 'strength'], ['bodyweight', 'assisted'], ['strength', 'stability'], ['deadlift pattern', 'functional']),
  exercise('rehab_single_leg_rdl_reach', 'Supported single-leg hinge reach', 'Single-leg hip hinge with hand support and a short reach.', ['glutes', 'hamstrings', 'core'], ['hip', 'knee', 'ankle_foot'], ['strength'], ['bodyweight', 'assisted'], ['strength', 'balance', 'stability'], ['single leg rdl', 'proprioception']),

  exercise('rehab_pendulum', 'Shoulder pendulum', 'Relaxed arm movement generated gently from the body.', ['shoulders', 'recovery'], ['shoulder'], ['protect', 'mobility'], ['bodyweight', 'assisted'], ['pain_relief', 'range_of_motion'], ['codman', 'swing']),
  exercise('rehab_scapular_setting', 'Scapular setting', 'Gentle shoulder-blade positioning without forcing the arm.', ['shoulders', 'back'], ['shoulder', 'back_neck'], ['protect', 'activation'], ['bodyweight'], ['neural_activation', 'stability'], ['posture', 'scapula']),
  exercise('rehab_table_slide', 'Supported table slide', 'Slide the hand on a table to assist shoulder motion.', ['shoulders', 'recovery'], ['shoulder'], ['mobility'], ['assisted'], ['range_of_motion'], ['flexion', 'supported']),
  exercise('rehab_wand_flexion', 'Assisted wand flexion', 'Use the other arm and a stick to assist approved shoulder motion.', ['shoulders', 'chest'], ['shoulder'], ['mobility'], ['assisted'], ['range_of_motion'], ['cane', 'stick', 'aarom']),
  exercise('rehab_shoulder_er_isometric', 'Shoulder external-rotation isometric', 'Gentle outward pressure without visible joint movement.', ['shoulders'], ['shoulder', 'elbow'], ['activation'], ['bodyweight', 'assisted'], ['neural_activation', 'stability'], ['rotator cuff', 'isometric']),
  exercise('rehab_band_external_rotation', 'Band external rotation', 'Controlled shoulder rotation against light band resistance.', ['shoulders', 'back'], ['shoulder'], ['strength'], ['band'], ['strength', 'stability'], ['rotator cuff']),
  exercise('rehab_wall_slide', 'Wall slide', 'Supported upward arm slide while controlling the shoulder blade.', ['shoulders', 'back'], ['shoulder', 'back_neck'], ['mobility', 'activation', 'strength'], ['assisted', 'bodyweight'], ['range_of_motion', 'stability', 'strength'], ['serratus', 'overhead']),
  exercise('rehab_push_up_plus_wall', 'Wall push-up plus', 'Wall push-up ending with controlled shoulder-blade reach.', ['shoulders', 'chest', 'triceps'], ['shoulder', 'elbow', 'wrist_hand'], ['activation', 'strength'], ['bodyweight'], ['strength', 'stability', 'neural_activation'], ['serratus', 'closed chain']),
  exercise('rehab_scaption', 'Light scaption raise', 'Arm raise in the shoulder-blade plane with approved resistance.', ['shoulders'], ['shoulder'], ['strength'], ['bodyweight', 'free_weight', 'band'], ['strength', 'stability'], ['rotator cuff', 'raise']),

  exercise('rehab_elbow_flex_extension', 'Elbow bend and straighten', 'Active elbow movement through the range prescribed by your clinician.', ['biceps', 'triceps', 'recovery'], ['elbow'], ['protect', 'mobility'], ['bodyweight', 'assisted'], ['range_of_motion', 'neural_activation'], ['flexion', 'extension']),
  exercise('rehab_pronation_supination', 'Forearm rotation', 'Turn the palm up and down through an approved range.', ['biceps', 'recovery'], ['elbow', 'wrist_hand'], ['mobility'], ['bodyweight', 'assisted'], ['range_of_motion', 'neural_activation'], ['pronation', 'supination']),
  exercise('rehab_wrist_flex_extension', 'Wrist bend and straighten', 'Gentle active wrist movement with the forearm supported.', ['recovery'], ['wrist_hand', 'elbow'], ['protect', 'mobility'], ['bodyweight', 'assisted'], ['range_of_motion', 'neural_activation'], ['wrist flexion', 'wrist extension']),
  exercise('rehab_tendon_glides', 'Hand tendon glides', 'Move through clinician-taught hand shapes without forcing the fingers.', ['recovery'], ['wrist_hand'], ['mobility', 'activation'], ['bodyweight'], ['range_of_motion', 'neural_activation'], ['fingers', 'hand mobility']),
  exercise('rehab_grip_squeeze', 'Gentle grip squeeze', 'Low-intensity grip work using an approved soft object.', ['biceps', 'recovery'], ['wrist_hand', 'elbow'], ['activation', 'strength'], ['ball'], ['neural_activation', 'strength'], ['hand', 'grip']),
  exercise('rehab_wrist_extension_isometric', 'Wrist-extension isometric', 'Resist wrist extension without allowing visible movement.', ['recovery'], ['wrist_hand', 'elbow'], ['activation'], ['bodyweight', 'assisted'], ['neural_activation', 'stability'], ['tennis elbow', 'isometric']),
  exercise('rehab_band_triceps_pressdown', 'Light band triceps press-down', 'Controlled elbow extension against approved band resistance.', ['triceps'], ['elbow', 'shoulder'], ['strength'], ['band'], ['strength', 'stability'], ['pressdown']),
  exercise('rehab_light_biceps_curl', 'Light supported biceps curl', 'Supported elbow flexion with clinician-approved resistance.', ['biceps'], ['elbow', 'shoulder', 'wrist_hand'], ['strength'], ['band', 'free_weight'], ['strength', 'stability'], ['curl']),

  exercise('rehab_dead_bug_brace', 'Supine brace with heel taps', 'Trunk control exercise with small alternating leg movement.', ['core', 'recovery'], ['back_neck', 'hip'], ['activation', 'strength'], ['bodyweight'], ['neural_activation', 'stability', 'strength'], ['dead bug', 'trunk control']),
  exercise('rehab_bird_dog', 'Supported bird dog', 'Opposite arm and leg reach while maintaining trunk control.', ['core', 'glutes', 'back'], ['back_neck', 'hip', 'shoulder'], ['activation', 'strength'], ['bodyweight'], ['stability', 'strength', 'balance'], ['quadruped']),
  exercise('rehab_pallof_press', 'Band anti-rotation press', 'Resist trunk rotation while pressing a band forward.', ['core', 'shoulders'], ['back_neck', 'hip', 'shoulder'], ['strength'], ['band'], ['stability', 'strength'], ['pallof', 'anti rotation']),

  exercise('rehab_pogo_hops', 'Double-leg pogo hops', 'Low-amplitude repeated hops emphasizing quiet, controlled landings.', ['calves', 'quads', 'power'], ['ankle_foot', 'knee', 'hip'], ['impact'], ['bodyweight'], ['plyometrics', 'stability'], ['jump', 'landing', 'elastic'], true),
  exercise('rehab_snap_down', 'Snap-down landing', 'Practice a rapid but controlled athletic landing position.', ['quads', 'glutes', 'hamstrings', 'power'], ['knee', 'ankle_foot', 'hip'], ['impact'], ['bodyweight'], ['plyometrics', 'stability'], ['deceleration', 'landing'], true),
  exercise('rehab_lateral_line_hop', 'Lateral line hops', 'Small side-to-side hops over a line with controlled landings.', ['calves', 'quads', 'glutes', 'power'], ['ankle_foot', 'knee', 'hip'], ['impact', 'return_to_sport'], ['bodyweight'], ['plyometrics', 'lateral_movement', 'stability'], ['side hop', 'agility'], true),
  exercise('rehab_lateral_bound_stick', 'Lateral bound and stick', 'Bound sideways and hold a stable single-leg landing.', ['glutes', 'quads', 'calves', 'power'], ['knee', 'ankle_foot', 'hip'], ['impact', 'return_to_sport'], ['bodyweight'], ['plyometrics', 'lateral_movement', 'balance'], ['skater', 'landing'], true),
  exercise('rehab_side_shuffle', 'Controlled side shuffle', 'Lateral shuffle with planned stops and changes of direction.', ['glutes', 'quads', 'calves', 'conditioning'], ['knee', 'ankle_foot', 'hip'], ['impact', 'return_to_sport'], ['bodyweight'], ['lateral_movement', 'stability'], ['agility', 'sidestep'], true),
  exercise('rehab_box_jump', 'Box jump and controlled landing', 'Two-leg jump to an approved height with a deliberate landing.', ['quads', 'glutes', 'calves', 'power'], ['knee', 'ankle_foot', 'hip'], ['return_to_sport'], ['step'], ['plyometrics', 'strength', 'stability'], ['jump', 'box', 'landing'], true),
  exercise('rehab_single_leg_hop_stick', 'Single-leg hop and stick', 'Single-leg hop followed by a stable, controlled landing.', ['quads', 'glutes', 'calves', 'power'], ['knee', 'ankle_foot', 'hip'], ['return_to_sport'], ['bodyweight'], ['plyometrics', 'balance', 'stability'], ['hop test', 'landing'], true),
  exercise('rehab_wall_ball_dribble', 'Wall-ball shoulder dribble', 'Fast, small ball contacts at a clinician-approved arm position.', ['shoulders', 'triceps', 'power'], ['shoulder', 'elbow', 'wrist_hand'], ['impact', 'return_to_sport'], ['ball'], ['plyometrics', 'stability', 'neural_activation'], ['reactive', 'overhead'], true)
];
