window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.south_africa = {
  currency: "R",
  treatments: {

    /* ================= Cardiology & Cardiac Surgery ================= */
    angioplasty_ptca: { usd: [3000, 7000], local: [55500, 129500] },
    bypass_surgery_cabg: { usd: [10000, 20000], local: [185000, 370000] },
    heart_valve_replacement: { usd: [12000, 24000], local: [222000, 444000] },
    pacemaker_implantation: { usd: [8000, 15000], local: [148000, 277500] },
    cardiac_consultation: { usd: [400, 1000], local: [7400, 18500] },

    /* ================= Orthopedics & Joint Replacement ================= */
    total_knee_replacement: { usd: [10000, 15000], local: [185000, 277500] },
    hip_replacement: { usd: [7000, 12000], local: [129500, 222000] },
    shoulder_elbow_replacement: { usd: [5000, 12000], local: [92500, 222000] },
    arthroscopy: { usd: [2000, 6000], local: [37000, 111000] },
    spinal_surgery: { usd: [8000, 15000], local: [148000, 277500] },

    /* ================= Neurology & Neurosurgery ================= */
    brain_tumor_surgery: { usd: [30000, 100000], local: [555000, 1850000] },
    spine_surgery: { usd: [8000, 25000], local: [148000, 462500] },
    deep_brain_stimulation: { usd: [25000, 40000], local: [462500, 740000] },
    epilepsy_surgery: { usd: [7000, 15000], local: [129500, 277500] },
    stroke_rehabilitation: { usd: [2000, 5000], local: [37000, 92500] },

    /* ================= Oncology (Cancer Treatment) ================= */
    chemotherapy: { usd: [830, 63100], local: [11655, 1167530] },
    radiation_therapy: { usd: [5000, 25000], local: [92500, 462500] },
    surgical_oncology: { usd: [5000, 15000], local: [92500, 277500] },
    bone_marrow_transplant: { usd: [25000, 50000], local: [462500, 925000] },
    cancer_second_opinion: { usd: [100, 300], local: [1850, 5550] },

    /* ================= Gastroenterology & Hepatology ================= */
    liver_transplant: { usd: [50000, 120000], local: [925000, 2220000] },
    gallbladder_biliary_surgery: { usd: [3000, 5000], local: [55500, 92500] },
    bariatric_surgery: { usd: [4000, 8000], local: [74000, 148000] },
    endoscopy_colonoscopy: { usd: [3000, 5000], local: [55500, 92500] },
    gi_cancer_treatment: { usd: [8000, 20000], local: [148000, 370000] },

    /* ================= Urology & Nephrology ================= */
    kidney_transplant: { usd: [7000, 35000], local: [129500, 647500] },
    prostate_surgery: { usd: [2200, 5000], local: [40700, 92500] },
    kidney_stone_removal: { usd: [3000, 8000], local: [55500, 148000] },
    dialysis: { usd: [150, 500], local: [2775, 9250] },
    urethral_reconstruction: { usd: [2000, 5000], local: [37000, 92500] },

    /* ================= Gynecology & Fertility ================= */
    ivf_icsi_fertility: { usd: [6000, 8000], local: [111000, 148000] },
    hysterectomy: { usd: [3000, 5000], local: [55500, 92500] },
    laparoscopic_gynec_surgery: { usd: [1500, 4000], local: [27750, 74000] },
    surrogacy_assistance: { usd: [20000, 30000], local: [370000, 555000] },
    maternity_delivery_packages: { usd: [2000, 5000], local: [37000, 92500] },

    /* ================= Cosmetic & Plastic Surgery ================= */
    hair_transplant: { usd: [1000, 5000], local: [18500, 92500] },
    rhinoplasty: { usd: [1500, 4000], local: [27750, 74000] },
    liposuction: { usd: [1500, 5000], local: [27750, 92500] },
    tummy_tuck: { usd: [2000, 6000], local: [37000, 111000] },
    breast_augmentation: { usd: [3000, 6000], local: [55500, 111000] },

    /* ================= Ophthalmology (Eye Care) ================= */
    cataract_surgery: { usd: [700, 2000], local: [12950, 37000] },
    lasik_refractive: { usd: [1000, 2500], local: [18500, 46250] },
    retinal_surgery: { usd: [1000, 3500], local: [18500, 64750] },
    glaucoma_treatment: { usd: [500, 1500], local: [9250, 27750] },

    /* ================= ENT (Ear, Nose & Throat) ================= */
    cochlear_implant: { usd: [20000, 25000], local: [370000, 462500] },
    sinus_surgery: { usd: [1500, 4000], local: [27750, 74000] },
    tonsil_adenoid_removal: { usd: [300, 1000], local: [5550, 18500] },
    ear_reconstruction: { usd: [3000, 6000], local: [55500, 111000] },

    /* ================= Dental & Oral Surgery ================= */
    dental_implants: { usd: [1000, 3000], local: [18500, 55500] },
    full_mouth_rehabilitation: { usd: [5000, 10000], local: [92500, 185000] },
    smile_design: { usd: [1000, 3000], local: [18500, 55500] },
    root_canal_treatment: { usd: [100, 300], local: [1850, 5550] },
    orthodontics: { usd: [500, 3000], local: [9250, 55500] },

    /* ================= Ayurveda, Wellness & Rejuvenation ================= */
    ayurvedic_detox: null,
    stress_relief_mental_wellness: null,
    weight_management: null,
    yoga_naturopathy_packages: null
  }
};

