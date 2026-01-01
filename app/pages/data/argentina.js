window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.argentina = {
  currency: "ARS",
  treatments: {

    // ================= CARDIOLOGY =================
    angioplasty: { usd: [5000, 12000], local: [2300000, 5520000] },
    bypass_surgery: { usd: [16000, 25000], local: [7360000, 11500000] },
    heart_valve_replacement: { usd: [15000, 30000], local: [6900000, 13800000] },
    pacemaker_implantation: { usd: [3000, 12000], local: [1380000, 5520000] },
    cardiac_consultation: { usd: [150, 500], local: [69000, 230000] },

    // ================= ORTHOPEDICS =================
    total_knee_replacement: { usd: [5000, 8000], local: [2300000, 3680000] },
    hip_replacement: { usd: [7000, 12000], local: [3220000, 5520000] },
    shoulder_elbow_replacement: { usd: [5000, 10000], local: [2300000, 4600000] },
    arthroscopy: { usd: [1600, 3500], local: [736000, 1610000] },
    spinal_surgery: { usd: [9670, 9670], local: [4448200, 4448200] },

    // ================= NEUROLOGY =================
    brain_tumor_surgery: { usd: [9573, 9573], local: [4402580, 4402580] },
    spine_surgery: { usd: [9670, 9670], local: [4448200, 4448200] },
    deep_brain_stimulation: { usd: [25000, 25000], local: [11500000, 11500000] },
    epilepsy_surgery: { usd: [9573, 9573], local: [4402580, 4402580] },
    stroke_rehabilitation: { usd: null, local: null },

    // ================= ONCOLOGY =================
    chemotherapy: { usd: [8000, 12000], local: [2760000, 5520000] },
    radiation_therapy: { usd: [2400, 4800], local: [1104000, 2208000] },
    surgical_oncology: { usd: null, local: null },
    bone_marrow_transplant: { usd: [14000, 30000], local: [6440000, 13800000] },
    cancer_second_opinion: { usd: null, local: null },

    // ================= GASTROENTEROLOGY =================
    liver_transplant: { usd: null, local: null },
    gallbladder_surgery: { usd: null, local: null },
    bariatric_surgery: { usd: null, local: null },
    endoscopy_colonoscopy: { usd: null, local: null },
    gi_cancer_treatment: { usd: null, local: null },

    // ================= UROLOGY =================
    kidney_transplant: { usd: null, local: null },
    prostate_surgery: { usd: [2000, 2000], local: [920000, 920000] },
    kidney_stone_removal: { usd: null, local: null },
    dialysis: { usd: null, local: null },
    urethral_reconstruction: { usd: null, local: null },

    // ================= GYNECOLOGY =================
    ivf_icsi: { usd: [4400, 7000], local: [2024000, 3220000] },
    hysterectomy: { usd: null, local: null },
    laparoscopic_gynec_surgery: { usd: null, local: null },
    surrogacy_assistance: { usd: null, local: null },
    maternity_package: { usd: null, local: null },

    // ================= COSMETIC =================
    hair_transplant: { usd: [1000, 5000], local: [460000, 2300000] },
    rhinoplasty: { usd: [1722, 4500], local: [791000, 2070000] },
    liposuction: { usd: [1000, 2000], local: [460000, 920000] },
    tummy_tuck: { usd: [1000, 8000], local: [460000, 3680000] },
    breast_augmentation: { usd: [2800, 2800], local: [1288000, 1288000] },

    // ================= OPHTHALMOLOGY =================
    cataract_surgery: { usd: null, local: null },
    lasik_surgery: { usd: null, local: null },
    retinal_surgery: { usd: null, local: null },
    glaucoma_treatment: { usd: null, local: null },

    // ================= ENT =================
    cochlear_implant: { usd: null, local: null },
    sinus_surgery: { usd: null, local: null },
    tonsil_adenoid_removal: { usd: null, local: null },
    ear_reconstruction: { usd: null, local: null },

    // ================= DENTAL =================
    dental_implants: { usd: [500, 1000], local: [230000, 460000] },
    full_mouth_rehabilitation: { usd: [8500, 20000], local: [3910000, 9200000] },
    smile_design: { usd: null, local: null },
    root_canal_treatment: { usd: null, local: null },
    orthodontics: { usd: null, local: null },

    // ================= WELLNESS =================
    ayurvedic_detox: { usd: null, local: null },
    stress_relief: { usd: null, local: null },
    weight_management: { usd: null, local: null },
    yoga_naturopathy: { usd: null, local: null }

  }
};
