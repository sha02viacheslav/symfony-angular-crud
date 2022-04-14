<?php

declare(strict_types=1);

namespace App\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

/**
 * Class AbstractCommand
 * @package App\Commands
 */
abstract class AbstractCommand extends Command
{
    /** @var Command[] */
    protected $commands;

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int|null
     */
    protected function execute(InputInterface $input, OutputInterface $output): ?int
    {
        $output->writeln('Importing Orders Data');
        foreach ($this->commands as $command) {
            $output->writeln('Running <info>' . $command->getName() . '</info>...');
            $command->up();
        }
        $output->writeln('Just Done!');

        return 0;
    }
}
