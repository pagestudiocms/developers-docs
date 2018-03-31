
Events and Observers
=====================

Working with events and observers is one of the main ways to extend PageStudio functionality. 
The events and observers implementation in PageStudio is based on the publish-subscribe pattern. 
Use them run your custom code in response to a system event or a custom event.

Use http://devdocs.magento.com/guides/v2.0/extension-dev-guide/events-and-observers.html as inspiration. 

.. note:: ...

The following guide will teach you the basics of tags and how to use them in your layouts.

.. contents::
   :local:
   :depth: 2

Events
######

Dispatching events
******

.. code-block:: php
    // Fire all registered events, with default parameters 
    $this->eventManager->dispatch('entries.edit.beforesave');
    
    // Fire all registered events, using parameters specified
    $this->eventManager->dispatch('entries.edit.beforesave', ['to' => $to, 'from' => $from, 'message' => $message]); 

Creating new events
******

Full example of an event 

.. code-block:: php

    namespace App\Modules\<module-name>\Event;

    class EmailLogger
    {
        public function LogSentEmail($data) {
            log_message('debug', print_r($data, TRUE));
        }

        public function LogEmail($data) 
        {
            log_message('debug', print_r($data, TRUE));
        }
    }

Registering the event within a class. Prefered methos is to do it within the ``<module-name>/config/events.php`` file.

.. code-block:: php

    $this->eventManager = new \App\Modules\Core\Event\Manager();
    $this->eventManager->register('entries.edit.beforesave',  array(
        'class'    => 'App\Modules\Core\Observer\EmailLogger',
        'function' => 'LogEmail',
        'filename' => 'EmailLogger.php',
        'filepath' => 'modules/Core/Observer',
        'params'   => 'Some Email Activity Occured'
    ));

Event Config
******
    
Sample ''events.php'' file 

.. code-block:: php

    $events['entries.edit.beforesave'][] = array(
        'class'    => 'App\Modules\Core\Observer\EmailLogger',
        'function' => 'LogEmail',
        'filename' => 'EmailLogger.php',
        'filepath' => 'modules/Core/Observer',
        'params'   => 'This is the first hook to be fired',
    );

    $observers['entries.edit.beforesave'][] = array(
        'class'    => 'App\Modules\Core\Observer\EmailLoggerObserver',
        'function' => 'execute',
    );

Observers 
#######

Creating an observer
******

:: 

    <?php 
    namespace App\Modules\Core\Observer;

    class EmailLoggerObserver
    {
        public function execute() 
        {
            var_dump('Hello');
        }
    }

Subscribing to events
******

.. code-block:: php

    $observers['entries.edit.beforesave'][] = array(
        'class'    => 'App\Modules\Core\Observer\EmailLoggerObserver',
        'function' => 'execute',
    );


.. toctree::
   :maxdepth: 2