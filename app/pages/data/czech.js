window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.czech_republic = {
  currency: "CZK",

  treatments: {

    // ================= Cardiology & Cardiac Surgery =================
    angioplasty: { usd: [4350, 7800], local: [100000, 175000] },
    bypass_surgery: { usd: [13000, 19800], local: [300000, 450000] },
    heart_valve_replacement: { usd: [15200, 26100], local: [350000, 600000] },
    pacemaker_implantation: { usd: [5200, 8700], local: [120000, 200000] },
    cardiac_consultation: { usd: [65, 175], local: [1500, 4000] },

    // ================= Orthopedics & Joint Replacement =================
    total_knee_replacement: { usd: [13000, 17400], local: [300000, 400000] },
    hip_replacement: { usd: [10900, 15200], local: [250000, 350000] },
    shoulder_elbow_replacement: { usd: [8700, 13000], local: [200000, 300000] },
    arthroscopy: { usd: [1740, 2600], local: [40000, 60000] },
    spinal_surgery: { usd: [10900, 17400], local: [250000, 400000] },

    // ================= Neurology & Neurosurgery =================
    brain_tumor_surgery: { usd: [13000, 19800], local: [300000, 450000] },
    spine_surgery: { usd: [10900, 17400], local: [250000, 400000] },
    deep_brain_stimulation: { usd: [17400, 34800], local: [400000, 800000] },
    epilepsy_surgery: { usd: [8700, 13000], local: [200000, 300000] },
    stroke_rehabilitation: { usd: [2200, 4350], local: [50000, 100000] },

    // ================= Oncology (Cancer Treatment) =================
    chemotherapy: { usd: [870, 6500], local: [20000, 150000] },
    radiation_therapy: { usd: [2600, 10900], local: [60000, 250000] },
    surgical_oncology: { usd: [6500, 17400], local: [150000, 400000] },
    bone_marrow_transplant: { usd: [26100, 52200], local: [600000, 1200000] },
    cancer_second_opinion: { usd: [130, 435], local: [3000, 10000] },

    // ================= Gastroenterology & Hepatology =================
    liver_transplant: { usd: [26100, 39100], local: [600000, 900000] },
    gallbladder_surgery: { usd: [2200, 3000], local: [50000, 70000] },
    bariatric_surgery: { usd: [5200, 10900], local: [120000, 250000] },
    endoscopy_colonoscopy: { usd: [175, 520], local: [4000, 12000] },
    gi_cancer_treatment: { usd: [8700, 17400], local: [200000, 400000] },

    // ================= Urology & Nephrology =================
    kidney_transplant: { usd: [15200, 26100], local: [350000, 600000] },
    prostate_surgery: { usd: [1740, 5200], local: [40000, 120000] },
    kidney_stone_removal: { usd: [2200, 4350], local: [50000, 100000] },
    dialysis: { usd: [260, 435], local: [6000, 10000] },
    urethral_reconstruction: { usd: [2200, 6500], local: [50000, 150000] },

    // ================= Gynecology & Fertility =================
    ivf_treatments: { usd: [2600, 5200], local: [60000, 120000] },
    hysterectomy: { usd: [3480, 5200], local: [80000, 120000] },
    laparoscopic_gynec_surgery: { usd: [2200, 4350], local: [50000, 100000] },
    surrogacy_assistance: { usd: [], local: [] },
    maternity_packages: { usd: [1090, 3480], local: [25000, 80000] },

    // ================= Cosmetic & Plastic Surgery =================
    hair_transplant: { usd: [1300, 3480], local: [30000, 80000] },
    rhinoplasty: { usd: [1740, 3480], local: [40000, 80000] },
    liposuction: { usd: [2600, 5200], local: [60000, 120000] },
    tummy_tuck: { usd: [3480, 6520], local: [80000, 150000] },
    breast_augmentation: { usd: [2600, 5200], local: [60000, 120000] },

    // ================= Ophthalmology =================
    cataract_surgery: { usd: [435, 1740], local: [10000, 40000] },
    lasik_surgery: { usd: [520, 1090], local: [12000, 25000] },
    retinal_surgery: { usd: [1520, 2600], local: [35000, 60000] },
    glaucoma_treatment: { usd: [650, 1300], local: [15000, 30000] },

    // ================= ENT =================
    cochlear_implant: { usd: [26100, 39100], local: [600000, 900000] },
    sinus_surgery: { usd: [1740, 3280], local: [40000, 75000] },
    tonsil_removal: { usd: [350, 520], local: [8000, 12000] },
    ear_reconstruction: { usd: [6520, 6520], local: [150000, 150000] },

    // ================= Dental =================
    dental_implants: { usd: [870, 1520], local: [20000, 35000] },
    full_mouth_rehab: { usd: [4350, 6520], local: [100000, 150000] },
    smile_design: { usd: [650, 2170], local: [15000, 50000] },
    root_canal: { usd: [175, 260], local: [4000, 6000] },
    orthodontics: { usd: [435, 870], local: [10000, 20000] },

    // ================= Wellness =================
    ayurvedic_detox: { usd: [], local: [] },
    stress_relief: { usd: [], local: [] },
    weight_management: { usd: [], local: [] },
    yoga_packages: { usd: [], local: [] }

  }
};
