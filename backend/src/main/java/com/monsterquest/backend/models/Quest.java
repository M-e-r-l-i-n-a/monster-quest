package com.monsterquest.backend.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "quests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Quest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private int difficulty; // 1-10
    private boolean completed;
}